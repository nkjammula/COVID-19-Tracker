import React from "react";
import "./App.css";
import SiderDemo from "./Common/Sider";
import { Route, Switch } from "react-router-dom";
import SafetyMeasures from "./Components/SafetyMeasures";
import SelfDiagnosis from "./Components/SelfDiagnosis";
import Tracker from "./Components/Tracker";
import { Layout } from "antd";

function App() {
  return (
    <div className="App">
      <Layout>
        <SiderDemo></SiderDemo>
        <Switch>
          <Route exact path="/" component={SafetyMeasures} />
          <Route path="/SelfDiagnosis" component={SelfDiagnosis} />
          <Route path="/Tracker" component={Tracker} />
          <Route exact path="/SafetyMeasures" component={SafetyMeasures} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
