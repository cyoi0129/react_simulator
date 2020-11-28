import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
/* import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"; */
/* Views */
import Home from './views/Home'
import Service from './views/Service'
import User from './views/User'
import Category from './views/Category'
import Article from './views/Article'
import NotFound from './views/NotFound'
/* Parts */
import ScrollToTop from './components/ScrollToTop';
import AppHeader from './components/AppHeader'


class App extends Component {
  render(){
    const data = 'local data'
    return (
      <Router>
        <ScrollToTop>
          <React.Fragment>
            <AppHeader />
            <Switch>
              <Route exact path="/" render={ () => <Home data={data} /> } />
              <Route path="/service" render={ () => <Service data={data} /> } />
              <Route path="/user" render={ () => <User data={data} /> } />
              <Route path="/category/:cid" render={ props => <Category data={data} {...props} /> } />
              <Route path="/article/:aid" render={ props => <Article data={data} {...props} /> } />
              <Route render={ () => <Home data={data} /> } />
              <Route path="*" component={NotFound} />
            </Switch>
          </React.Fragment>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
