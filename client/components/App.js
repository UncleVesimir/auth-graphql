import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Header from './Header'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Landing from './Landing';
import Dashboard from './Dashboard';

import requireAuth from './requireAuth';

const App = (props) =>{

  const { match } = props;

  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path={match.url + "login"} component={LoginForm}/>
        <Route path={match.url + "signup"} component={SignUpForm}/>
        <Route path={match.url + "dashboard"} component={requireAuth(Dashboard)}/>
      </Switch>
    </div>
  )
}

export default App;