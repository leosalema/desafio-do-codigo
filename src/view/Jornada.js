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

    render () {
        console.log(this.state)
        return (
        <div>
            <Header />
            <h1>Jornada</h1>
        </div>
        );
    }
}

export default Jornada;
