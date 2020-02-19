import React from 'react'

const Card = props => {

    const renderDisciplinas = (materia) => {
        let itens = []
        for (let i = 0; i < materia.length; i++) { 
            itens.push(
                <div className="professor-disciplina-itens" key={i}>
                    {materia[i]}
                </div>
            )
        }
        return(<div>{itens}</div>)
    }

    const renderCard = () => {
        
        const list = props.list || []
        return list.map(professor => (

            <div key={professor.nome} className="card">
                <div className="top-container">
                    <div className="left-container" >
                        <img 
                            src={professor.imagem}
                            className="card-img"
                            alt='professor-img'
                        />
                    </div>
                    <div className="middle-container">
                        <div className="professor-name">{professor.nome}</div>
                        <div className="professor-disciplinas-title">Disciplinas:</div>
                        <div className="professor-disciplinas">{renderDisciplinas(professor.materia)}</div>
                    </div>
                    <div className="right-container">
                        <div className="professor-rating">
                            {professor.nota}  
                            <img 
                                src="https://aulascolmeia.com.br/img/rating-star.png" 
                                className="professor-star"
                                alt='star'
                            />
                        </div>
                    </div>
                </div>
                <div className="middle-curriculo">
                    <div className="curriculo-title">Currículo <hr/></div>
                    <div className="curriculo-body"><p>{professor.curriculo}</p></div>
                </div>
                <div className="bottom-container">
                    <div className="bottom-left">
                        <div className="professor-location"><img src="https://aulascolmeia.com.br/img/marker-icon.png" alt='marker'/> {professor.bairro}</div>
                    </div>
                    <div className="bottom-right">
                        <div className="professor-select">Selecionar</div>
                    </div>
                </div>
            </div>

        ))
    }

    return(
        <div>
            {renderCard()}
        </div>
    )
}

export default Card