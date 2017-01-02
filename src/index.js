import React from 'react';
import ReactDOM from 'react-dom';
import App from './Component/App.jsx';
import CommunityContainer from './Component/CommunityContainer/CommunityContainer.jsx';
import CultureContainer from './Component/CultureContainer/CultureContainer.jsx';
import NewCommunityPost from './Component/NewCommunityPost/NewCommunityPost.jsx';
import NewCulturePost from './Component/NewCulturePost/NewCulturePost.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

ReactDOM.render((
<Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={CultureContainer} />
    <Route path="/communities" component={CommunityContainer}/>
    <Route path="/api/cultures" component={NewCulturePost} />
    <Route path="/api/communities" component={NewCommunityPost} />
    </Route>
  </Router>
  ), document.querySelector('#root-container'));
