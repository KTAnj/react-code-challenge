import React from 'react';

function AppBar(props) {
    return (
      <div className="pw-100 pt-5">
        <div className="d-flex justify-content-end">
          {props.buttonList.map((button, index) => {
              return <button key={'app_button_'+index} className="btn btn-primary" data-toggle="modal" data-target={button.dataTarget} onClick={button.action} >{button.name}</button>
          })}
        </div>
      </div>
    );
  }
  
  export default AppBar;