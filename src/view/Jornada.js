import React, {Component} from 'react';
import Header from '../common/Header';
import axios from 'axios';

const URL = 'http://localhost:5000/api/admin/jornada/'

class Jornada extends Component {
    constructor(props) {
        super(props)

        this.state = { jornada: null }
    }

    componentWillMount() {
        axios.get(URL)
        .then(response => this.setState({ jornada: response.data}))
    }

    render() {
        return (
        <div>
            <Header />
            <main role='main'>
                <div className='album py-5 bg-light'>
                    <div className='container'>
                    {this.state.jornada === null ? 
                        (
                            <h1>Não possui</h1>
                        ) : (
                            <div className='row'>
                            <div className='col-md-4'>
                                <div className='card mb-4 shadow-sm'>
                                    <div className='card-body'>
                                        <p className='card-text'>Qualquer Texto</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
                                                <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
                                            </div>
                                            <small className='text-muted'>9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card mb-4 shadow-sm'>
                                    <div className='card-body'>
                                        <p className='card-text'>Qualquer Texto</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
                                                <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
                                            </div>
                                            <small className='text-muted'>9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='card mb-4 shadow-sm'>
                                    <div className='card-body'>
                                        <p className='card-text'>Qualquer Texto</p>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className='btn-group'>
                                                <button type='button' className='btn btn-sm btn-outline-secondary'>View</button>
                                                <button type='button' className='btn btn-sm btn-outline-secondary'>Edit</button>
                                            </div>
                                            <small className='text-muted'>9 mins</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                        )
                    }
                        
                    </div>
                </div>
            </main>
        </div>
        );
    }
}

export default Jornada;
