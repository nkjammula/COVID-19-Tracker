import { Layout, Menu } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
const { Sider } = Layout;

class SiderDemo extends React.Component {
  render() {
    return (
      <Sider>
        <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <NavLink to="/">SafetyMeasures</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/SelfDiagnosis">SelfDiagnosis</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="/Tracker">Tracker</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default SiderDemo;
// ReactDOM.render(<SiderDemo />, mountNode);
