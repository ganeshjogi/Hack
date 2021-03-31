import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const AdminHome=(props)=>{
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
      <div className="mahead">
        <Link className="anchor vb">New</Link>
        <Link className="anchor vb">Active</Link>
        <Link className="anchor">Solved</Link>
      </div>
      <div className="home">
        <div className="issues">
          <div className="eissue">
            <div className="cid">#202103114</div>
            <div>issue</div>
            <div>CreatedOn</div>
            <div>Developer</div>
            <div>Status</div>
            <div>Damage Product</div>
            <div>18-03-2021</div>
            <div>Mr XYZ</div>
            <div>Active</div>
            <div className="edit hand" onClick={handleToggle}>edit</div>
          </div>
          <div className={`dup upform1 ${isActive ? "nodis" : null}`} >
              <select name="assigndev" id="cars" className="aform__input1" onChange={props.changed}>
              <option value="" disabled selected>Select your status</option>
              <option value="XYZ">XYZ</option>
              <option value="ABC">ABC</option>
            </select>
              <button className="btn btn-blue2" onClick={props.adcomp}>Update</button>
          </div>
          <div className="eissue">
            <div className="cid">#202103114</div>
            <div>issue</div>
            <div>CreatedOn</div>
            <div>Developer</div>
            <div>Status</div>
            <div>Damage Product</div>
            <div>18-03-2021</div>
            <div>Mr XYZ</div>
            <div>Active</div>
            <div className="edit">edit</div>
          </div>
          <div className="dup upform1 nodis">
            <select name="assigndev" id="cars" className="aform__input1" onChange={props.changed}>
              <option value="" disabled selected>Select your status</option>
              <option value="XYZ">XYZ</option>
              <option value="ABC">ABC</option>
            </select>
              <button className="btn btn-blue2" onClick={props.adcomp}>Update</button>
          </div>
        </div>

        <div className="cissue">
          <h3 className="bhead">Admin</h3>
          <div className="btext">Users &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
          <div className="btext">Developers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
          <div className="btext">New Issue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
          <div className="btext">Solved Issue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
          <div className="btext">Active Issue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
        </div>
      </div>
    </main>
        </>
    )
}

export default AdminHome;