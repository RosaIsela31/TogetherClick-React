import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
// import { FaHandHoldingHeart } from "react-icons/fa";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';


export const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <a onClick={logout} href='#!'>
          {' '}
          <span className='hide-sm'>
          logout</span></a>
        </li>
    </ul>
  );

  const guestLinks = ( 
    <ul>
        <li>
          <a href='#!'>Proveedores</a>
        </li>
        <li>
          <Link to='/register'>Regístrate</Link>
        </li>
        <li>
          <Link to='/login'>Inicia Sesión</Link>
        </li>
    </ul>
  );

  return (
    <nav className='navbar bg-dark'>
      <h1> 
        <Link to='/'>
           TogetherClick 
        </Link>
      </h1>
       { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);