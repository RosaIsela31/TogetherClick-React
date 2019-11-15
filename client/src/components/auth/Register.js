import React, { Fragment, useState } from 'react'

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;
  return (
    <Fragment>
      <h1 className='large text-primary'>Regístrate</h1>
        <p className='lead'>Crea Tu Cuenta</p>
        <form className='form' action='create-profile.html'>
          <div className='form-group'>
            <input type='text' placeholder='Name' name='name' value={name} required />
          </div>
          <div className='form-group'>
            <input type='email' placeholder='Email address' name='email'/>
            <small className='form-text'>
              Este sitio usa Gravatars, puedes usar tu foto de perfil de  tu Gravatar email
            </small>
          </div>
          <div className='form-group'>
            <input 
              type='password'
              placeholder='password'
              name='password'
              minLength='6'
            />
          </div>
          <div className='form-group'>
            <input 
              type='password'
              placeholder='Confirm Password'
              name='password2'
              minLength='6'
            />
          </div>
          <input type='submit' class='btn btn-primary' value='Register' />
        </form>
        <p className='my-1'>
         ¿Ya tienes una cuenta? <a href='login.html'>Inicia Sesión</a>

        </p>

    </Fragment>
  )
}

export default Register;