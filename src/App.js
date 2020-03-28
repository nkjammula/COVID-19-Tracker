import React from 'react';
import './App.css';
import SiderDemo from './Common/Sider'
import { Route, Switch } from "react-router-dom";
import SafetyMeasures from './Components/SafetyMeasures';
import SelfDiagnosis from './Components/SelfDiagnosis';
import Tracker from './Components/Tracker';


function App() {
  return (
    <div className="App">
      {/* <header className="">
      </header> */}
      <Switch>
        <Route exact path="/" component={SafetyMeasures} />
        <Route path="/SelfDiagnosis" component={SelfDiagnosis} />
        <Route path="/Tracker" component={Tracker} />
      </Switch>
      <SiderDemo/>
    </div>
  );
}

export default App;
