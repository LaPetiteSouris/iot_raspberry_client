import React from 'react'
import { reduxForm } from 'redux-form'

class LoginForm extends React.Component {
  render() {
    console.log("rendering dumb login page")
    const { fields: {name, address, email}, handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" {...name}/>
        {name.error && name.touched && <div>{name.error}</div>}

        <label>Address</label>
        <input type="text" {...address} />
        {address.error && address.touched && <div>{address.error}</div>}

        <label>Email</label>
        <input type="text" {...email}/>
        {email.error && email.touched && <div>{email.error}</div>}

        <button onClick={handleSubmit}>Submit</button>
      </form>
    )
  }
}

LoginForm = reduxForm({
  form: 'login',                      // the name of your form and the key to
  fields: ['name', 'address', 'email'], // a list of all your fields in your form
})(LoginForm)

export default LoginForm
