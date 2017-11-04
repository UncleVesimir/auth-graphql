import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, NavLink } from 'react-router-dom';
import query from '../queries/CurrentUser';
import Logout from '../queries/Logout';

class Header extends Component {

  OnLogoutClick = () => {
    this.props.mutate({
      refetchQueries: [{query, variables:{}}]
      
    });
  }
  
  renderButtons = () => {
    const { loading, user } = this.props.data;

    if(loading){return <div/>}

    if(user){
      return (
        <li>
          <a onClick={this.OnLogoutClick}>Log Out</a>
        </li>

      )
    }
    else{
      return (
        <div>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </div>
      )
    }
  }

  render(){

    const {loading, user} = this.props.data;
    
    return (
      <nav>
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">Home</Link>
          <ul className="right">
            {this.renderButtons()}
          </ul>
        </div>
      </nav>
      
    )
  }
};

export default graphql(Logout)(
  graphql(query)(Header)
)