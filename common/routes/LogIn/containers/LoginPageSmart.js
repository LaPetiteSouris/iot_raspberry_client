import React from 'react'
import {connect} from 'react-redux'
import {initialize} from 'redux-form'
import LoginPage from '../components/LoginPage'

class SmartLoginPage extends React.Component {

  handleSubmit(data) {
    console.log('Submission received!', data)
    this.props.dispatch(initialize('login', data)) // clear form
  }

  render() {
    console.log("Rendering smartlogin")
    return (
      <div id="app">
        <h1>SmartLoginPage</h1>
        <LoginPage onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    )
  }

}

export default connect()(SmartLoginPage)
