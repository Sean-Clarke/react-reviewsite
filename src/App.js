import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import FAQPage from './components/FAQPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import SearchPage from './components/SearchPage';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Navbar />
          <main className="App-main">
            <Route name="home" exact path="/" component={HomePage}/>
            <Route name="about" exact path="/about" component={AboutPage}/>
            <Route name="faq" exact path="/faq" component={FAQPage}/>
            <Route name="login" exact path="/login" component={LoginPage}/>
            <Route name="signup" exact path="/signup" component={SignupPage}/>
            <Route name="search" exact path="/search" component={SearchPage}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
