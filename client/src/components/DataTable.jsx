// eslint-disable-next-line no-unused-vars
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';

const DataTable = ({ tableName, data }) => {
  if (!data.length) {
    return <p>No hay datos para mostrar.</p>;
  }

  const headers = Object.keys(data[0]);

  return (
    <div className="container mt-5">
      <h2>{tableName}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

DataTable.propTypes = {
  tableName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};

export default DataTable;