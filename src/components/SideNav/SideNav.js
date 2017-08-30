import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink, withRouter } from "react-router-dom";

const SideNav = withRouter(props => <SideNavMenu {...props} />) 

class SideNavMenu extends Component {

whichLinkSelected = (path) => {
    if (path === '/btc') {
        return ['1']
    } else if (path === '/eth') {
        return ['2']
    } else {
        return ['1']
    }
}

  render() {
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={this.whichLinkSelected(this.props.location.pathname)}>
        <Menu.Item key="1">
          <NavLink to="/btc">
            <Icon type="pie-chart" />
            <span>Bitcoin</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="2">
          <NavLink to="/eth">
            <Icon type="pie-chart" />
            <span>Ethirium</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}

export default SideNav;
