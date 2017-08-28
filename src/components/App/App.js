import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd'
import 'antd/dist/antd.css'

const {Content, Footer, Sider} = Layout

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
      <Layout style={{height: '100%'}}>
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
            <div style={{padding: 24, background: '#fff', minHeight: 360}}>Bill is a cat.</div>
          </Content>
          <Footer style={{textAlign: 'center'}}>Smena school © 2017</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App
