import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
      console.log('EXITOSO');
    }


  return (
    <Fragment>
      <h1 className='large text-primary'>Inicia Sesión</h1>
        <p className='lead'>Ingresa a tu Cuenta</p>
        <form className='form' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input 
              type='email' 
              placeholder='Email address' 
              name='email'
              value={email} 
              onChange={e => onChange(e)}
              required
              />
          </div>
          <div className='form-group'>
            <input 
              type='password'
              placeholder='password'
              name='password'
              value={password} 
              onChange={e => onChange(e)}
              minLength='6'
            />
          </div>
          <input type='submit' class='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
         ¿Aún no tienes una cuenta? <Link to='/register'>Regístrate</Link>

        </p>

    </Fragment>
  )
}

export default Login;