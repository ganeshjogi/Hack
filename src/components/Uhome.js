import React from 'react';
import { Link } from 'react-router-dom';

const ListCompliant = ()=>{
    
    return(
        <>
    <header className="uheader">
      <h1 className="uhead">Grievance Redressal</h1>
      <h3 className="ushead"><Link to='/home' className="anchor1 ">Home</Link></h3>
      <h3 className="ushead"><Link to='/addCompliant' className="anchor1">ADD</Link></h3>
      <h3 className="ushead"><Link to='/login' className="anchor1">Logout</Link></h3>
    </header>
    <main>
      <div className="mahead">
        <Link className="anchor vb">Active</Link>
        <Link className="anchor">Solved</Link>
      </div>
      <div className="home">
        <div className="issues">
          <div className="issue">
            <div className="cid">#202103114</div>
            <div>issue</div>
            <div>CreatedOn</div>
            <div>Developer</div>
            <div>Status</div>
            <div>Damage Product</div>
            <div>18-03-2021</div>
            <div>Mr XYZ</div>
            <div>Active</div>
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
    );
}

export default ListCompliant;