import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Header from './Header'

const App = (props) =>{

  const { match } = props;

  return (
    <div>
      <Header/>
      <Switch>
        <div>Landing</div>
      </Switch>
    </div>
  )
}

export default App;