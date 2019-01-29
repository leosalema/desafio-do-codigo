import React, {Component} from 'react'
import Header from '../../common/Header'
import Card from '../../common/Card'
import axios from 'axios'

const URL = 'http://localhost:5000/api/admin/jornada/'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = { trilha: null }
    }

    componentDidMount() {
        axios.get(`${URL}${this.props.match.params.id}/trilha/`)
            .then(response => this.setState({ trilha: response.data}))
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Header />
                <main role='main'>
                    <div className='album py-5 bg-light'>
                        <div className='container'>
                            <div className='row'>
                                {this.state.trilha === null ? 
                                    (
                                        <Card 
                                            size='12'
                                            title='Sem Trilhas cadastradas' 
                                            text='Infelizmente não encontramos nenhuma trilha cadastrada. 
                                            Caso queira cadastrar alguma por favor clique no botão abaixo'
                                            buttonName='Criar'
                                            handleTitle={() => alert(this.title.bind)}
                                            handleButton={() => alert(this.buttonName.bind)}
                                        />
                                    ) : 
                                    (
                                        this.state.trilha.map(trilha => (
                                            <Card 
                                                key={trilha.id}
                                                size='6'
                                                title={trilha.titulo}
                                                text={trilha.resumo}
                                                buttonName='Editar'
                                                handleTitle={() => alert(this.title)}
                                                handleButton={() => alert(this.buttonName)}
                                            />
                                        ))
                                    )
                                }   
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default List