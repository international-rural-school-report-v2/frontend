import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const date_column_num = 1;

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
              <TableHeaderColumn key={`thc-${i}`}>{(i !== header.length - 1) ? columnName.charAt(0).toUpperCase() + columnName.slice(1) : columnName.toUpperCase()}</TableHeaderColumn>
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
                  <TableRowColumn key={`trc-${j}`}>{(j === date_column_num) ? moment(new Date(Number(teacher[columnName]))).format('l') : teacher[columnName]}</TableRowColumn>
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