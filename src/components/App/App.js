import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.css'

const {Content, Footer, Sider} = Layout

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledFooter = styled(Footer)`
  textAlign: center
`

class App extends Component {
  state = {
    collapsed: false
  }
  onCollapse = collapsed => {
    console.log(collapsed)
    this.setState({collapsed})
  }

  render() {
    return (
      <StyledLayout>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout>
          <Content style={{margin: '0 16px'}}>

          </Content>
          <StyledFooter>Smena school © 2017</StyledFooter>
        </Layout>
      </StyledLayout>
    )
  }
}

export default App
