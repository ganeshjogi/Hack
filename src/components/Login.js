import React from 'react';
import { Link } from 'react-router-dom';

const Login = (props)=>{
    return(
        <>
      <header className="header">
      <h1 className="head">Grievance Redressal</h1>
    </header>
    <main>
      <div className="center">
        <form action="#" className="form">
          <h2 className="mhead">Login</h2>
          <div>
            <input
              type="email"
              className="form__input"
              onChange={props.changed}
              placeholder="Enter email"
              name='email'
            />
          </div>
          <div>
            <input
              type="password"
              className="form__input"
              onChange={props.changed}
              placeholder="Enter Password"
              name='password'
            />
          </div>
        </form>
        <div className="row">
          <button className="btn" onClick={props.login}>Login</button>
          <h5 className="shead">
            New User? <Link to='/signup' className='anchor'>Signup</Link>
          </h5>
        </div>
      </div>
    </main>
        </>
    );

}

export default Login;