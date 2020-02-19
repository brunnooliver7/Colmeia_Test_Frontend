import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './app.css'

import Professor from './components/professor'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <nav className='navbar navbar-inverse bg-inverse'>
            <div className='container'>
              <div className='navbar-header'>
                <a className='navbar-brand' href='/'>
                  <i className='fa fa-graduation-cap'></i> Professor App
                </a>
              </div>
              <div id='navbar' className='navbar-collapse collapse'>
                <ul className="nav navbar-nav">
                  <li><a href='/professores'>Professores</a></li>
                </ul>
              </div>
            </div>
          </nav>
          <Route path="/" exact component={Professor} />
        </Router>
      </div>
    )
  }
}

export default App
