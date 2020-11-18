import React from 'react';

function FormTextarea(props) {
    return (
      <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea type="text" className="form-control" name={props.name} id={props.id} ref={props.fieldRef}/>
      {props.error && <div className="form-error">
        This field is required field
      </div>}
    </div>
    );
  }
  
  export default FormTextarea;