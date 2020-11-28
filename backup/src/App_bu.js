import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
/* Redux */
import { connect } from 'react-redux'
import { store, setName, deleteName } from './redux'
import Button from '@material-ui/core/Button';

class App extends Component {
  render(){
    const data = this.props
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
            <h2>{this.props.article}</h2>

            <Button onClick={this.props.deleteName}>deleteName</Button>
            <Button onClick={() => this.props.setName('Test New Name')}>setName</Button>
          </React.Fragment>
        </ScrollToTop>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  // storeは巨大なJsonの塊なので、nameにjsonから取って来たデータを代入している。 
  article: state.data.article,
  user: state.data.user
})

const mapDispatchToProps = {
  // importしたactionCreatorを記述。
  setName,
  deleteName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
