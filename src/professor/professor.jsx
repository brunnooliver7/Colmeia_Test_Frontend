import React, { Component } from 'react'
import axios from 'axios'

import ProfessorForm from './professorForm'

import Card from './card'
import '.././app.css'

const URL = 'http://localhost:3003/api/professores'

export default class Professor extends Component {
    
    constructor(props) {
        
        super(props)

        this.state = { 
            pesquisa: '', 
            list: [] 
        }
        
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.refresh()

    }

    refresh(pesquisa='') {
        const search = pesquisa ? `&nome__regex=/${pesquisa}/` : ''
        axios.get(`${URL}?${search}`)
            .then(resp => this.setState({...this.state, pesquisa, list: resp.data}))
    }

    handleChange(event) {
        this.setState({...this.state, pesquisa: event.target.value })
    }
    
    handleSearch() {
        this.refresh(this.state.pesquisa)
    }
    
    render() {
        return (
            <div>
                <ProfessorForm 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                    nome={this.state.pesquisa} 
                />
                <Card 
                    list={this.state.list}  
                />
            </div>
        )
    }
}