import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

import Jokes from "./Jokes";

import Homepage from "./components/Homepage";
import Signup from './components/Signup';
import Login from './components/Login';
import Userprofile from './components/Userprofile';
import Edit from './components/Edit';
import Signout from './components/Signout';
import Delete from './components/Delete';
import Phone from './components/Phone';
import Addphone from './components/Addphone';

class App extends React.Component {
  render(){
    return (
      <div>
        <Route exact path={"/"} component={Homepage} />
        <Route path={"/signup"} component={Signup} />
        <Route path={"/login"} component={Login}/> 
        <Route path={"/userprofile"} component={Userprofile}/>
        <Route path={"/edit"} component={Edit}/>
        <Route path={"/signout"} component={Signout}/>
        <Route path={"/delete"} component={Delete}/>
        <Route path={"/addaphone"} component={Addphone}/>
        <Route path={"/yourphone"} component={Phone}/>
        <Jokes/>
      </div>
    );
  }
}

export default App;
