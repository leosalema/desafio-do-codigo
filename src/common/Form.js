import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  componentDidMount() {
    this.setState({ data: this.props.data })
  }
  render () {
    return (
      <div className="col-md-8 order-md-1">
        <form>
          <div className="form-group">
            <label form="exampleFormControlInput1">Titulo</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="titulo"
              
            />
          </div>
          <div className="form-group">
            <label>Resumo da Jornada</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="resumo"
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
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="ativa"
              value="1"
            />
            <label className="form-check-label">Ativa</label>
          </div>
          <button className="btn btn-primary" onClick={this.props.handleClick}>
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;