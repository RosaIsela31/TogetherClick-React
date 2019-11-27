import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export const Landing = ({ isAuthenticated }) => {
  if(isAuthenticated){
    return <Redirect to='/dashboard' />

  }

  return (
    <section className='landing'> 
     <div className='dark-overlay'>
      <div className='landing-inner'>
       <h1 className='x-large'>Together Click <br/>
       </h1>
       <h2>El espacio incluyente donde toda la comunidad de bodas se conecta </h2> <br/>
        <div className='buttons'>
         <Link to='/register' className='btn btn-primary'>
           Regístrate
         </Link>
         <Link to='/login' className='btn btn-light'>
           Inicia Sesión
         </Link>
        </div>
      </div>
     </div>     
    </section>
  )
}

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);