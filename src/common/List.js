import React, {Component} from 'react'
import Card from './Card'
import axios from 'axios'

const URL = 'http://localhost:5000/api/admin/'

class List extends Component {
    constructor(props) {
        super(props)

        this.state = { data: null }
    }

    componentWillMount() {
        const URL_BASE = `${URL}${this.props.url}`
        axios.get(URL_BASE)
            .then(response => this.setState({ data: response.data}))
    }

    buttonEdit(id) {
        this.props.info.history.push(`${id}/${this.props.titleMsg}`)
    }

    buttonTitle(id) {
        this.props.info.history.push(`${this.props.titleMsg}/${id}`)
    }

    render() {
        return (
            <div>
                <main role='main'>
                    <div className='album py-5 bg-light'>
                        <div className='container'>
                            <div className='row'>
                                {this.state.data === null ? 
                                    (
                                        <Card 
                                            size='12'
                                            title={`Sem ${this.props.titleMsg} cadastradas`}
                                            text={`Infelizmente não encontramos nenhuma ${this.props.titleMsg} cadastrada. 
                                            Caso queira cadastrar alguma por favor clique no botão abaixo`}
                                            buttonName='Criar'
                                            handleTitle={() => alert(this.title.bind)}
                                            handleButton={() => alert(this.buttonName.bind)}
                                        />
                                    ) : 
                                    (
                                        this.state.data.map(data => (
                                            <Card 
                                                key={data.id}
                                                size='4'
                                                title={data.titulo}
                                                text={data.resumo}
                                                buttonName='Editar'
                                                handleTitle={() => this.buttonTitle(data.id)}
                                                handleButton={() => this.buttonEdit(data.id)}
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