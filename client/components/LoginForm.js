import React, { Component } from 'react';
import AuthForm from './AuthForm';

import { graphql } from 'react-apollo';
import mutation from '../queries/Login';
import query from '../queries/CurrentUser';

import history from '../history';

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = { errors:[] };
    this.formTitle = "Login"
  }

  componentWillUpdate(nextProps){
    // this.props //old props, before update
    // nextProps // the next set of props, the component will recieve as it re-renders
    if(!this.props.data.user && nextProps.data.user){ //old props have no 'user' and new props do (from passportjs)
    // this causes user to be redirect ONLY when the user is authenticated and prevents the user
    // seeing a brief un-authed dashboard page or no content.
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
  graphql(mutation)(LoginForm)
);