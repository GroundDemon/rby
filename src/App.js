import React from "react";
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserPage from './pages/AboutPage'
import { Link } from 'react-router-dom'
import MetaTags from 'react-meta-tags'
import './index.css';

export default function App() {
  return (
    <div className="App-Container">
      <MetaTags>
        <title>RBY</title>
        <meta property="og:title" content="RBY" />
        <meta name="description" content="Rising Beneath You" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </MetaTags>
      <div className="Header">
        <Link className="Header-Logo" to="/">RBY</Link>
        <Link className="Header-About" to="/AboutPage"></Link>
        <a className="Header-Twitter" href="https://twitter.com/grounddemonrby"></a>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={UserPage} />
      </Switch>
   </div>
  )
}