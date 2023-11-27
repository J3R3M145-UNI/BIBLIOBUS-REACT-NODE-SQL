// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import { Table, Pagination, Button } from 'react-bootstrap';

const DataTable = ({ data, onEdit }) => {
  const itemsPerPage = 10; // Número de elementos por página
  const [currentPage, setCurrentPage] = useState(1);

  if (!data.length) {
    return <p>No hay datos para mostrar.</p>;
  }

  const headers = Object.keys(data[0]);

  // Lógica para la paginación
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleEditClick = (item) => {
    onEdit(item);
  };

  return (
    <div className="table-responsive mt-5">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {currentItems.map((item, index) => (
            <tr key={index}>
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
              <td>
                <Button variant="info" onClick={() => handleEditClick(item)}>
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(Math.ceil(data.length / itemsPerPage))].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

DataTable.propTypes = {
  tableName: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default DataTable;