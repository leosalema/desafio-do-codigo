import React from 'react';

export default props => (
  <div className={`col-md-${props.size}`}>
    <div className="card mb-4 shadow-sm">
      <h5 className="card-header" onClick={props.handleTitle}>
          {props.title}
      </h5>
      <div className="card-body">
        <p className="card-text">{props.text}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={props.handleButton}>
              {props.buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
