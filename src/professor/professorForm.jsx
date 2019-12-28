import React from 'react'

export default props => {

    // [Enter] faz a pesquisa
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            props.handleSearch()
        }
    }

    return (
        <div role='form' className='professor-form'>
    
            {/* Campo de pesquisa */}
            <div className='search-form'> 
                <input 
                    className='form-control'
                    placeholder='Procure por um professor'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.pesquisa}
                    >
                </input>
            </div>

            {/* Botão de pesquisa  */}
            <div className='search-btn'>
                <button 
                    className='btn btn-primary' 
                    onClick={props.handleSearch}>
                    <i className='fa fa-search'></i>
                </button>
            </div>
            
        </div>
    )
}
