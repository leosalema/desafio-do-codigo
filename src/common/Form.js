import React from 'react';

export default props => (
  <div className='col-md-8 order-md-1'>
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
        <label for="exampleFormcontrolTextarea1">Resumo da Jornada</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="resumo"
        />
      </div>
      <div className="form-group">
        <label for="descricao">Descrição da Jornada</label>
        <textarea
          className="form-control"
          id="descricao"
          rows="10"
          name="descricao"
          toolbar={[ 'Essentials', 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ]}
          height='300'
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          name="ativa"
          value="1"
          checked
        />
        <label className="form-check-label" for="exampleCheck1">Ativa</label>
      </div>
      <button type="submit" className="btn btn-primary">Salar</button>
    </form>
  </div>
);
