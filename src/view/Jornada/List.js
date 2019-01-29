import React, {Component} from 'react'
import Header from '../../common/Header'
import Card from '../../common/Card'
import axios from 'axios'

const URL = 'http://localhost:5000/api/admin/jornada/'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = { jornada: null }
    }

    componentWillMount() {
        axios.get(URL)
            .then(response => this.setState({ jornada: response.data}))
    }

    handleTitle(jornada) {
        this.props.history.push(`/jornadas/${jornada.id}/`)
    }

    handleButton(jornada) {
        this.props.history.push(`/${jornada.id}/jornada/`)
    }

    render() {
        console.log(this.state.jornada)
        console.log(this.props)
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
                                            title='Sem jorndas cadastradas' 
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
                                                handleTitle={() => this.handleTitle(jornada)}
                                                handleButton={() => this.handleButton(jornada)}
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