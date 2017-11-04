import React, { Component } from 'react';
import AuthForm from './AuthForm';

import { graphql } from 'react-apollo';
import mutation from '../queries/Login';

class LoginForm extends Component {
  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables:{ email, password }
    })
  }

  render(){
    return (
      <div>
        <h4>Login</h4>
        <AuthForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

export default graphql(mutation)(LoginForm);