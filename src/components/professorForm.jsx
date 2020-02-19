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
        </div>
    )
}
