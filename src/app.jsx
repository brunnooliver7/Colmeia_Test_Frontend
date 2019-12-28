import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import './app.css'

import Professor from './professor/professor'

export default props => (

    <div>
    
        {/* Menu  */}
        <nav className='navbar navbar-inverse bg-inverse'>
            <div className='container'>
                <div className='navbar-header'>
                    <a className='navbar-brand' href='#'>
                        <i className='fa fa-calendar-check-o'></i> ProfessorApp
                    </a>
                </div>

                <div id='navbar' className='navbar-collapse collapse'>
                    <ul className="nav navbar-nav">
                        <li><a href='#/professores'>Professores</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        {/* Routes */}
        <Router history={hashHistory}>
            <Route path='/professores' component={Professor} />
            <Redirect from='*' to='/professores' />
        </Router>

    </div>
)
