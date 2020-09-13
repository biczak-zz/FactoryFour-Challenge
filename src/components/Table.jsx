import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const TableContainer = styled.div`
  width: 1200px;
  max-width: 100%;
  height: 750px;
  max-height: 100%;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  border: 2px solid rgba(0, 0, 0, 0.125);
  border-radius: 4px;

  .table-cell {
    width: 50%;
    height: 75px;
    display: inline-block;
  }
`;

const Table = ({ endpoints }) => {
  const generateTableCells = endpoints.map((endpoint, index) => (
    <div key={index} className="table-cell">
      <Cell data={endpoint} />
    </div>
  ));

  return (
    <TableContainer>
      <div className="table-cell">
        <Cell
          data={{
            success: false,
            hostname: 'invites',
            message: 'Endpoint Unavailable. We apologize for the inconvenience.',
            time: new Date().getTime(),
          }}
        />
      </div>
      <div className="table-cell">
        <Cell
          data={{
            success: false,
            hostname: 'messages',
            message: 'Endpoint Unavailable. We apologize for the inconvenience.',
            time: new Date().getTime(),
          }}
        />
      </div>
      <div className="table-cell">
        <Cell
          data={{
            success: false,
            hostname: 'users',
            message: 'Endpoint Unavailable. We apologize for the inconvenience.',
            time: new Date().getTime(),
          }}
        />
      </div>
      <div></div>
      {generateTableCells}
    </TableContainer>
  );
};

export default Table;
