import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner'
import { FaUserCircle } from "react-icons/fa";
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile } from '../../actions/profile';

const Dashboard = ({ 
  getCurrentProfile, 
  auth: { user }, 
  profile: { profile, loading } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    loading && profile === null ? <Spinner /> : <Fragment>
      <h1 className='large text-primary'>Dashboard </h1>
      <p className='lead'> <FaUserCircle/> Welcome {user && user.name}</p>
      {profile !== null ? 
      <Fragment>
        <DashboardActions />
        <Experience experience = {profile.experience} />
        <Education education = {profile.education} />
      </Fragment> :  
      <Fragment>
        <p>Aún no tienes un perfil, por favor agrega tu información para actualizarlo</p>
        <Link to='/create-profile' className='btn btn-primary my-1'>
          Crear Perfil
        </Link>
      </Fragment>}
    </Fragment>
  )
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.func.isRequired
}

const mapStateToProps = state  => ({
   auth: state.auth,
   profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
