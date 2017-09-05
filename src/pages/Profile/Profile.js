import React from 'react'
import {Layout, Input} from 'antd'
import styled from 'styled-components'
import {connect} from 'react-redux'
import {changeEmail, changeFirstName, changeLastName} from 'actions/profileActions'

const StyledLayout = styled(Layout)`margin: 16px;`

const Profile = ({email, firstName, lastName, changeEmail, changeFirstName, changeLastName}) => (
  <StyledLayout>
    <Input placeholder="email" value={email} onChange={event => changeEmail(event.target.value)} />
    <Input
      placeholder="first name"
      value={firstName}
      onChange={event => changeFirstName(event.target.value)}
    />
    <Input placeholder="last name" value={lastName} onChange={event => changeLastName(event.target.value)} />
  </StyledLayout>
)

const mapStateToProps = state => ({
  email: state.profile.email,
  firstName: state.profile.firstName,
  lastName: state.profile.lastName
})

const mapDispatchToState = dispatch => ({
  changeEmail: value => dispatch(changeEmail(value)),
  changeFirstName: value => dispatch(changeFirstName(value)),
  changeLastName: value => dispatch(changeLastName(value))
})

export default connect(mapStateToProps, mapDispatchToState)(Profile)
