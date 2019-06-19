import React from 'react';
import './App.css';
import {Route} from "react-router-dom";

import Jokes from "./Jokes";

import Homepage from "./components/Homepage"

class App extends React.Component {
  render(){
    return (
      <div>
        <Route exact path={"/"} component={Homepage} />
        <Jokes/>
      </div>
    );
  }
}

export default App;
