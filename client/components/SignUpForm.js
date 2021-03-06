import React, { Component } from 'react';
import AuthForm from './AuthForm';

import { graphql } from 'react-apollo';
import mutation from '../queries/SignUp';
import query from '../queries/CurrentUser';

import history from '../history';

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = { errors: [] };
    this.formTitle = "Sign Up"
  }

  componentWillUpdate(nextProps){
    if(!this.props.data.user && nextProps.data.user){
      history.push("/dashboard");
    }
  }

  onSubmit = ({ email, password }) => {
    this.props.mutate({
      variables:{ email, password },
      refetchQueries:[{query}]
    })
    .catch( res => {
      const errors = res.graphQLErrors.map(error => error.message)
      this.setState({errors});
    });
  }

  render(){
    return (
      <div className="">
        <AuthForm formTitle={this.formTitle} onSubmit={this.onSubmit} errors={this.state.errors}/>
      </div>
    )
  }
}

export default graphql(query)(
  graphql(mutation)(SignUpForm)
);