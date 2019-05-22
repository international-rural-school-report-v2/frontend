import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

export default ({ header, data }) =>
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
          <TableRow key={`tr-${i}`}>
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
