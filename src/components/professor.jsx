import React, { Component } from 'react'
import axios from 'axios'

import ProfessorForm from './professorForm'

import Card from './card'
import '.././app.css'

const URL = 'http://localhost:4000/professores'

export default class Professor extends Component {
    
    constructor(props) {
        
        super(props)

        this.state = { 
            list: [] 
        }
        
        this.handleChange = this.handleChange.bind(this)
        
        this.inicializar()
    }

    inicializar() {
        axios.get(URL).then(resp => {
            this.setState({...this.state, list: resp.data})
        })
    }

    handleChange(event) {
        var pesquisa = event.target.value
        var URLsearch = URL.concat('/?nome=', pesquisa)
        axios.get(URLsearch).then(resp => {
            this.setState({...this.state, list: resp.data})
        })
    }
        
    render() {
        return (
            <div>
                <ProfessorForm 
                    handleChange={this.handleChange}
                    nome={this.state.pesquisa} 
                />
                <Card
                    list={this.state.list}  
                />
            </div>
        )
    }
}