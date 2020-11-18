import React from 'react';

function DataGrid(props) {
  return (
    <div className="pw-100 pt-5">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {props.columns.map((column, index) => {
              return <th scope="col" key={'header_' + index}>{column.title}</th>
            })}
            {props.actionColumns &&
              <th>Action</th>
            }
          </tr>
        </thead>
        <tbody>
          {!props.dataLoading && props.data.map((data, k) => {
            return <tr key={'row_' + k}>
              {props.columns.map((column, i) => {
                return <td key={'data_' + k + '_' + i}>{data[column.field]}</td>
              })}
              {props.actionColumns &&
                <td>{
                  props.actionColumns.actions.map((action, k) => {
                    return <i key={'action_' + k} data-toggle="modal" data-target={action.dataTarget} style={{ cursor: 'pointer' }} className={" fa " + action.icon} onClick={() => action.action(data)}></i>
                  })
                }</td>
              }
            </tr>
          })}
          {props.dataLoading &&
            <tr>
              <td className="p-5 text-center" colSpan={props.columns.length + 1}>
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </td>

            </tr>
          }
        </tbody>
      </table>
    </div>
  );
}

export default DataGrid;