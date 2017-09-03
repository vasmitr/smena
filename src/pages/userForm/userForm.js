import React, { Component } from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import {
    changeEmail,
    changeFirstName,
    changeLastName
  } from "actions/userFormActions";


class userForm extends Component {
  render() {
    const { onChangeEmail, onChangeFirstName, onChangeLastName } = this.props;
    return (
      <Form>
        <Form.Item>
          <Input placeholder="Email"
           name="email" onChange={onChangeEmail}
           value={this.props.email}
           />
        </Form.Item>

        <Form.Item>
          <Input
            placeholder="First Name"
            name="firstname"
            onChange={onChangeFirstName}
            value={this.props.firstName}
          />
        </Form.Item>

        <Form.Item>
          <Input
            placeholder="Last Name"
            name="lastname"
            onChange={onChangeLastName}
            value={this.props.lastName}
          />
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  collapsed: state.sider.collapsed,
  email: state.userForm.email,
  firstName: state.userForm.firstName,
  lastName: state.userForm.lastName
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: e => dispatch(changeEmail(e.target.value)),
  onChangeFirstName: e => dispatch(changeFirstName(e.target.value)),
  onChangeLastName: e => dispatch(changeLastName(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(userForm);
