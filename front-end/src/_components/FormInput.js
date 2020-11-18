import React from 'react';

function FormInput(props) {
  console.log(props.error)
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id} ref={props.fieldRef} className="form-control" />
      {props.error && <div className="form-error">
        This field is required field
      </div>}
    </div>
  );
}

export default FormInput;