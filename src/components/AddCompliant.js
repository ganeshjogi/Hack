import React from 'react';
import { Link } from 'react-router-dom';

const AddCompliant=(props)=>{
    return(
        <>
   <header className="uheader">
      <h1 className="uhead">Grievance Redressal</h1>
      <h3 className="ushead"><Link to='/home' className="anchor1 ">Home</Link></h3>
      <h3 className="ushead"><Link to='/addCompliant' className="anchor1">ADD</Link></h3>
      <h3 className="ushead"><Link to='/login' className="anchor1">Logout</Link></h3>
    </header>
    <main>
      <div className="container">
        <h1 className="lhead">Add issue</h1>
        <form action="#" className="gform">
          <label for="name">Name of issue</label>
          <input type="text" className="aform__input" id="name" name="cname" onChange={props.changed}/>

          <label for="des">Description</label>
          <input type="email" className="aform__input" id="des" name="cdesc" onChange={props.changed}/>

          <label for="img">Image Url</label>
          <input type="text" className="aform__input" id="img" name="cimg" onChange={props.changed}/>
        </form>
        <div className="crow">
          <button className="btn btn-blue" onClick={props.adcomp}>Submit</button>
        </div>
      </div>
    </main>
    </>
    );
}

export default AddCompliant;