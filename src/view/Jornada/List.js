import React, {Component} from 'react'
import Header from '../../common/Header'
import Card from '../../common/Card'
import axios from 'axios'

const URL = 'http://localhost:5000/api/admin/jornada/'

class JornadaForm extends Component {
    constructor(props) {
        super(props)

        this.state = { jornada: null }
    }

    componentDidMount() {
        axios.get(`${URL}`)
            .then(response => this.setState({ jornada: response.data}))
    }

    handleTitle(id) {
        this.props.history.push(`/jornada/${id}`)
    }

    handleEdit(id) {
        this.props.history.push(`/${id}/jornada/`)
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
                                {this.state.jornada === null ? 
                                    (
                                        <Card 
                                            size='12'
                                            title='Sem Jornadas cadastradas' 
                                            text='Infelizmente não encontramos nenhuma jornada cadastrada. 
                                            Caso queira cadastrar alguma por favor clique no botão abaixo'
                                            buttonName='Criar'
                                            handleTitle={() => alert(this.title.bind)}
                                            handleButton={() => alert(this.buttonName.bind)}
                                        />
                                    ) : 
                                    (
                                        this.state.jornada.map(jornada => (
                                            <Card 
                                                key={jornada.id}
                                                size='4'
                                                title={jornada.titulo}
                                                text={jornada.resumo}
                                                buttonName='Editar'
                                                handleTitle={() => this.handleTitle(jornada.id)}
                                                handleButton={() => this.handleEdit(jornada.id) }
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

export default JornadaForm