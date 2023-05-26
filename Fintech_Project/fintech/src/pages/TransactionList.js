import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Table = styled.table`
  width: 100%;
  margin: 10px;
  border-collapse: collapse;
  border: 1px solid #ccc;
`;

const TableRow = styled.tr`
  background-color: ${props => (props.isEven ? "#f9f9f9" : "#fff")};
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f2f2f2;
  border-bottom: 1px solid #ccc;
  text-align: left;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ccc;
`;
const TransactionList = ({ transactionList }) => {
  return (
    <Container>
      <Table>
        <thead>
          <TableRow>
            <TableHeader>날짜</TableHeader>
            <TableHeader>내용</TableHeader>
            <TableHeader>금액</TableHeader>
            <TableHeader>잔액</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {transactionList.length > 0 &&
            transactionList.map((transaction, index) => {
              return (
                <TableRow key={index} isEven={index % 2 === 0}>
                  <TableCell>{transaction.tran_date}</TableCell>
                  <TableCell>{transaction.print_content}</TableCell>
                  <TableCell>{transaction.tran_amt}</TableCell>
                  <TableCell>{transaction.after_balance_amt}</TableCell>
                </TableRow>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
}

export default TransactionList;