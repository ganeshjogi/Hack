import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const UpdateComplaint = (props) =>{
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
    return(
        <>
        <header className="uheader">
      <h1 className="uhead">Grievance Redressal</h1>
      <h3 className="ushead"><Link to='/devhome' className='anchor1'>Home</Link></h3>
      <h3 className="ushead"><Link to='/login' className='anchor1'>Logout</Link></h3>
    </header>
    <main>
      <div className="mahead">
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
          <div className={`dup upform ${isActive ? "nodis" : null}`}>
            <select name="cstatus" id="cars" className="aform__input1" onChange={props.changed}>
              <option value="" disabled selected>Select your status</option>
              <option value="active">Active</option>
              <option value="solved">Solved</option>
            </select>
              <input type="text" className="aform__input2" placeholder="Issue Description" name="csdesc" onChange={props.changed}/>
              <button className="btn btn-blue1" onClick={props.adcomp}>Update</button>
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
          <div className="dup upform">
            <select name="cars" id="cars" className="aform__input1" >
              <option value="" disabled selected>Select your status</option>
              <option value="active">Active</option>
              <option value="solved">Solved</option>
            </select>
              <input type="text" className="aform__input2" placeholder="Issue Description" />
              <button className="btn btn-blue1">Update</button>
          </div>
        </div>
        <div className="cissue">
          <h3 className="bhead">User 1</h3>
          <div className="btext">Total Issue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
          <div className="btext">Total Issue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
          <div className="btext">Total Issue &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5</div>
        </div>
      </div>
    </main>
        </>
    )
}

export default UpdateComplaint;