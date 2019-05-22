import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import DataTable from '../components/DataTable.js';
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

const StickyDiv = styled.div`
  /* display: flex;
  border: 3px solid red;
  top: 100px;
  position: sticky;
  z-index: 10; */
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const TeacherAttendance = props => {
  return (
    <DivWrapper>
      <h1>Teacher&nbsp;Attendance</h1>
      <StickyDiv>
        <MuiThemeProvider>
          <DataTable
            header={[
              'Name', 'Date', 'In', 'Out', 'TMM'
            ]}
            data={teacherAttendanceData}
          />
        </MuiThemeProvider>
      </StickyDiv>
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