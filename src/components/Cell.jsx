import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.div`
  width: 100%;
  height: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.125);

  .cell-top-row,
  .cell-bottom-row {
    width: 95%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cell-top-row {
    font-size: 16px;
    font-weight: 600;

    .success {
      color: #28a745;
    }

    .error {
      color: #dc3545;
    }
  }
`;

const Cell = ({ data }) => (
  <CellContainer>
    <div className="cell-top-row">
      <span className="endpoint-name">{data.hostname}</span>
      <span className={data.success ? 'success' : 'error'}>{data.success || 'g'}</span>
    </div>
    <div className="cell-bottom-row">
      <span className="response-message">{data.message}</span>
      <span className="response-timestamp">{data.time}</span>
    </div>
  </CellContainer>
);

export default Cell;
