import React from 'react';
import styled from 'styled-components';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/

const StickyTable = styled(TableHeaderColumn)`
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DataTable = ({ header, data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {
            header.map((columnName, i) =>
              <TableHeaderColumn key={`thc-${i}`}>{columnName}</TableHeaderColumn>
            )
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data.map((teacher, i) =>
            <TableRow style={(i % 2 == 0) && { backgroundColor: 'lightgray' }} key={`tr-${i}`}>
              {
                header.map((columnName, j) =>
                  <TableRowColumn key={`trc-${j}`}>{teacher[columnName]}</TableRowColumn>
                )
              }
            </TableRow>
          )
        }
      </TableBody>
    </Table>
  );
}

export default DataTable;