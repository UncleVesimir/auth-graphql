import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password:""
    }
  }

  renderErrors = () => {
    return this.props.errors.map(errMsg => {
      return (<div key={errMsg}>{errMsg}</div>)
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.onSubmit({email, password});
  }

  render(){
    return (
      <div className="row">
        <div className="col s8 offset-s2">
          <h4>{this.props.formTitle}</h4>
          <form onSubmit={this.onSubmit}> 
            <div className="input=field">
              <input
                placeholder="Email"
                value={this.state.email}
                onChange={e => { this.setState({email: e.target.value})}}
              />
            </div>
            <div className="input=field">
              <input 
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={e => { this.setState({password: e.target.value})}}
              />
            </div>
            <div className="errors">
              {this.renderErrors()}
            </div>
            <button className="btn">Submit</button>
          </form>
        </div>
      </div>
    )

  }
  
}

export default AuthForm