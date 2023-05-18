import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TransactionHistory = ({ transactions }) => {
  return (
    <Table className="transaction-history">
      <TableHead>
        <TableHeadRow>
          <TableHeadCell>Type</TableHeadCell>
          <TableHeadCell>Amount</TableHeadCell>
          <TableHeadCell>Currency</TableHeadCell>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TableDataRow key={id}>
            <TableDataCell>{type}</TableDataCell>
            <TableDataCell>{amount}</TableDataCell>
            <TableDataCell>{currency}</TableDataCell>
          </TableDataRow>
        ))}
      </TableBody>
    </Table>
  );
};

const Table = styled.table`
  width: 800px;
  margin: 20px auto;
  border: 1px solid #000;
  border-radius: 5px;
`;

const TableHead = styled.thead`
  background-color: #a2a2f5;
  color: #fff;
`;

const TableHeadRow = styled.tr``;

const TableHeadCell = styled.th`
  padding: 10px;
  font-weight: bold;
`;

const TableBody = styled.tbody``;

const TableDataRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  text-align: center;
`;

const TableDataCell = styled.td`
  padding: 10px;
`;
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
