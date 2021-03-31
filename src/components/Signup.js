import React from 'react';
import { Link } from 'react-router-dom';

const Signup =(props)=>{
    return(
        <>
        <header className="header">
      <h1 className="head">Grievance Redressal</h1>
    </header>
    <main>
      <div className="center">
        <form action="#" className="form">
          <h2 className="mhead">Sign Up</h2>
          <div >
            <input
              type="email"
              className="form__input"
              placeholder="Enter email"
              onChange={props.changed}
              name="semail"

            />
          </div>
          <div >
            <input
              type="text"
              className="form__input"
              placeholder="Enter Username"
              onChange={props.changed}
              name="suname"
            />
          </div>
          <div >
            <input
              type="text"
              className="form__input"
              placeholder="Enter Mobilenumber"
              onChange={props.changed}
              name="snum"
            />
          </div>
          <div>
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              onChange={props.changed}
              name="spassword"
            />
        </div>
            <div>
                <input
                  type="password"
                  className="form__input"
                  placeholder="Confirm Password"
                  onChange={props.changed}
                  name="scpassword"
                />
          </div>
          
        </form>
        <div className="row">
            <button className="btn" onClick={props.signup}>Submit</button>
            <h5 className="shead">Already a user? <Link to='/login' className="anchor">Login</Link></h5>
          </div>
    </div>  
    </main>
        </>
    );
}

export default Signup;