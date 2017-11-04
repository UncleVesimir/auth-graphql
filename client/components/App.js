import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Header from './Header'
import LoginForm from './LoginForm'
import Landing from './Landing';

const App = (props) =>{

  const { match } = props;

  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path={match.url + "login"} component={LoginForm}/>
      </Switch>
    </div>
  )
}

export default App;