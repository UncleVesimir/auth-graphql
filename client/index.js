import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient, { createNetworkInterface } from 'apollo-client';

import { Router, Route} from 'react-router-dom';
import hashHistory from './history';
import App from './components/App';

const networkInterface = createNetworkInterface({
  uri:"/graphgql",
  opts: {
    credentials: 'same-origin' // allow apollo-client to send cookies along with request to servers with
    // SAME-ORIGIN as the page domain
  }
});

const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  networkInterface
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}/>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
