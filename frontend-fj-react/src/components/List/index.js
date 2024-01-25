import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableContainer,
  } from '@chakra-ui/react'

function List({children}) {
  return (
    <TableContainer>
        <Table size='sm'>
            <Thead>
            <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Telefone</Th>
                <Th isNumeric>Cordenada x</Th>
                <Th isNumeric>Cordenada y</Th>
            </Tr>
            </Thead>
            <Tbody>
                {children}
            </Tbody>
            <Tfoot>
            <Tr>
                <Th>Nome</Th>
                <Th>E-mail</Th>
                <Th>Telefone</Th>
                <Th isNumeric>Cordenada x</Th>
                <Th isNumeric>Cordenada y</Th>
            </Tr>
            </Tfoot>
        </Table>
    </TableContainer>
  );
}

export default List;
