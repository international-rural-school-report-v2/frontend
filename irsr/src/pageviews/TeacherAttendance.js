import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Table from '../components/Table.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// globals
const { teacherAttendanceData } = require('../globals/DummyData.js')



/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  color: black;
  width: 100%;
  flex-direction: column;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const TeacherAttendance = props => {
  return (
    <DivWrapper>
      <h1>Teacher&nbsp;Attendance</h1>
      <MuiThemeProvider>
        <Table
          header={[
            'Name', 'Date', 'In', 'Out', 'TMM'
          ]}
          data={teacherAttendanceData}
        />
      </MuiThemeProvider>
    </DivWrapper>
  );
}

const mapStateToProps = state => ({
  teachersAttendance: state.teachersAttendance
});

export default connect(
  mapStateToProps,
  {}
)(TeacherAttendance);