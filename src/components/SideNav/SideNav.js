import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink, withRouter } from "react-router-dom";

const SideNav = withRouter(props => <SideNavMenu {...props} />) 

class SideNavMenu extends Component {


  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.location.pathname]}>
        <Menu.Item key="/etc">
          <NavLink to="/btc">
            <Icon type="pie-chart" />
            <span>Bitcoin</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/eth">
          <NavLink to="/eth">
            <Icon type="pie-chart" />
            <span>Ethirium</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="/profile">
        <NavLink to="/profile">
          <Icon type="user" />
          <span>Profile</span>
        </NavLink>
      </Menu.Item>
      </Menu>
    );
  }
}

export default SideNav;
