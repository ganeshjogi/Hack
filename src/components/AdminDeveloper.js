import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const AdminDeveloper = (props)=>{
  const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };
    return(
        <>
     <header className="uheader">
      <h1 className="uhead">Grievance Redressal</h1>
      <h3 className="ushead"><Link to='/admin' className="anchor1 ">Home</Link></h3>
      <h3 className="ushead"><Link to='/addev' className="anchor1 ">Developers</Link></h3>
      <h3 className="ushead"><Link to='/login' className="anchor1">Logout</Link></h3>
    </header>
    <main>
    <div class="flex">
      <div className="ig">
        <div className="vb mr">ID</div>
        <div className="vb mr">Name</div>
        <div className="vb mr">Role</div>
        <div className="mr">Options</div>
      </div>
      <h3 class="ushead1 hand" onClick={handleToggle}>+ADD</h3>
      </div>
      <div className="home">
        <div className="issues">
          <div className="issue">
            <div>12453</div>
            <div>Mr XYZ</div>
            <div>Developer</div>
            <div className='hand' onClick={handleToggle}>Edit</div>
            <div className='hand'>Delete</div>
          </div>
        </div>
        <div className={`cissue ${isActive ? "nodis" : null}`}>
            <form action="#" >
                <h2 className="fhead">ADD/UPDATE</h2>
                <div >
                  <input
                    type="text"
                    className="gform__input"
                    placeholder="Enter email"
                    name='ademail'
                    onChange={props.changed}
                  />
                </div>
                <div >
                  <input
                    type="text"
                    className="gform__input"
                    placeholder="Enter Username"
                    name='aduname'
                    onChange={props.changed}
                  />
                </div>
                <div >
                  <input
                    type="text"
                    className="gform__input"
                    placeholder="Enter Mobilenumber"
                    name='adunum'
                    onChange={props.changed}
                  />
                </div>
                <div>
                  <input
                    type="password"
                    className="gform__input"
                    placeholder="Password"
                    name='adupass'
                    onChange={props.changed}
                  />
              </div>
                
              </form>
              <div className="row">
                  <button className="btn-db" onClick={props.adcomp}>Submit</button>
                </div>
        </div>
      </div>
    </main>
    </>
    );
}

export default AdminDeveloper;