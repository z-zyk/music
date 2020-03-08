import React from 'react';
import './App.css';
import One from "./components/one"
import Ranklist from "./components/ranklist"
import Singerpart from "./components/singerpart"
import Play from "./components/play"

import {Route,Redirect,NavLink,BrowserRouter as Router,Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route  path="/music" component={One}/>
        <Route  path="/singerpart" component={Singerpart} />
        <Route  path="/ranklist" component={Ranklist} />
        <Route  path="/musicplay" component={Play}  exact/>

        <Redirect from="/" to="/music/recommend" exact></Redirect>
        </Switch>
    </div>
  );
}

export default App;


