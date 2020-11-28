import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
/* import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom"; */
/* Views */
import Home from './views/Home'
import Simulator from './views/Simulator'
import NotFound from './views/NotFound'
/* Parts */
import ScrollToTop from './components/ScrollToTop'
import AppHeader from './components/AppHeader'
import Footer from './components/Footer'


class App extends Component {
  render(){
    const data = 'local data'
    return (
      <Router>
        <ScrollToTop>
          <React.Fragment>
            <AppHeader />
            <main style={{paddingTop:56,paddingBottom:80}}>
            <Switch>
              <Route exact path="/" render={ () => <Home data={data} /> } />
              <Route path="/simulator" render={ () => <Simulator data={data} /> } />
              <Route render={ () => <NotFound data={data} /> } />
            </Switch>
            </main>
            <Footer />
          </React.Fragment>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
