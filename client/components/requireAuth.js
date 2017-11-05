import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';
import history from '../history';

export default (ComposedComponent) => {

  class Authenticated extends Component {

    componentWillUpdate(nextProps){
      if(!nextProps.data.loading && !nextProps.data.user){
        history.push("/login");
      }
    }
    
    render(){
      return (
        <ComposedComponent {...this.props} />
      )
    }
    
  }

  return graphql(query)(Authenticated);
};