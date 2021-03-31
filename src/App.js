import React from 'react';
import {Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AddCompliant from './components/AddCompliant';
import Uhome from './components/Uhome';
import Dhome from './components/Dhome';
import AdminHome from './components/AdminHome';
import AdminDeveloper from './components/AdminDeveloper';

class App extends React.Component{
    state={
        email:'',
        password:'',
        semail:'',
        suname:'',
        snum:'',
        spassword:'',
        scpassword:'',
        cname:'',
        cdesc:'',
        cimg:'',
        cstatus:'',
        csdesc:'',
        assigndev:'',
        ademail:'',
        aduname:'',
        adunum:'',
        adpass:''
    }
    validateEmail=(mail)=>{
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
        {
          return true;
        }
          return false;
    }
    phonenumber=(txt)=>{
      const phoneno = /^\d{10}$/;
      if(txt.match(phoneno)){
          return true;
      }
      else
      {
            return false;
      }
    }
    login=()=>{
        console.log(this.state);
    }
    signup=()=>{
      if(this.validateEmail(this.state.semail)){
        if(this.phonenumber(this.state.snum)){
          if(this.state.spassword === this.state.scpassword){
        console.log(this.state);
        alert('sucess');
      }
      else{
        window.alert('confirm password and password are not eqaul');
      }
          
        }
        else{
          alert('Please give valid number')
        }
      }
      else{
        alert('Please give valid email');
      }
      
    }
    adcomp=()=>{
      console.log(this.state);
    }
    changed = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    }
    
    render(){
        return(
        <>
        <Switch>
          <Route
            exact
            path='/login'
            render={(props) => (
              <Login  login={this.login} changed={this.changed} />
            )}
            />
            <Route
            exact
            path='/signup'
            render={(props) => (
              <Signup  signup={this.signup} changed={this.changed} />
            )}          
          />
          <Route
            exact
            path='/addCompliant'
            render={(props) => (
              <AddCompliant  adcomp={this.adcomp} changed={this.changed} />
            )}          
          />
          <Route
            exact
            path='/devhome'
            render={(props) => (
              <Dhome adcomp={this.adcomp} changed={this.changed} />
            )}          
          />
          <Route
            exact
            path='/admin'
            render={(props) => (
              <AdminHome  adcomp={this.adcomp} changed={this.changed} />
            )}          
          />
          <Route
            exact
            path='/home'
            render={(props) => (
              <Uhome  />
            )}          
          />
          <Route
            exact
            path='/addev'
            render={(props) => (
              <AdminDeveloper adcomp={this.adcomp} changed={this.changed}/>
            )}          
          />
          </Switch>
        </>
          );
    }
}

export default App;