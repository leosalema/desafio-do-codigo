import React, {Component} from 'react';
import axios from 'axios';
import Header from '../../common/Header';

class JornadaForm extends Component {
    constructor (props) {
        super (props);
        const id = this.props.match.params.id;
        this.state = {titulo: '', resumo: '', descricao: '', ativa: false, URL: `http://localhost:5000/api/admin/jornada/${id}`};
  }

  componentDidMount() {
    axios
      .get (this.state.URL)
      .then (response =>
        response.data.map (jornada =>
          this.setState ({
            titulo: jornada.titulo,
            resumo: jornada.resumo,
            descricao: jornada.descricao,
            ativa: jornada.ativa,
          })
        )
      );
  }

  handleChangeTitulo(e) {
    this.setState({ titulo: e })
  }

  handleChangeResumo(e) {
    this.setState({ resumo: e })
  }

  handleChangeDescricao(e) {
    this.setState({ descricao: e })
  }

  handleChangeAtiva(e) {
    this.setState({ ativa: !this.state.ativa })
  }

  handleSubmit() {
      console.log('aqui')
      const data = this.state
      axios.put(this.state.URL, { data })
        .then(response => console.log(response))
  }

  render () {
    return (
      <div>
        <Header />
        <div className="col-md-8 order-md-1">
          <form>
            <div className="form-group">
              <label form="exampleFormControlInput1">Titulo</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="titulo"
                value={this.state.titulo}
                onChange={event => this.handleChangeTitulo (event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Resumo da Jornada</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="resumo"
                value={this.state.resumo}
                onChange={event => this.handleChangeResumo (event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Descrição da Jornada</label>
              <textarea
                className="form-control"
                id="descricao"
                rows="10"
                name="descricao"
                toolbar={[
                  'Essentials',
                  'heading',
                  '|',
                  'bold',
                  'italic',
                  'link',
                  'bulletedList',
                  'numberedList',
                  'blockQuote',
                ]}
                height="300"
                value={this.state.descricao}
                onChange={event => this.handleChangeDescricao(event.target.value)}
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                name="ativa"
                value={this.state.ativa}
                checked={this.state.ativa}
                onChange={event => this.handleChangeAtiva (event.target.value)}
              />
              <label className="form-check-label">Ativa</label>
            </div>
            <button
              className="btn btn-primary"
              onClick={() => this.handleSubmit()}
            >
              Salvar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default JornadaForm;
