import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../actions/index.js';


/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
`;

const DivSpacer = styled.div`
  display: flex;
  min-width: 100%;
  height: 100px;
`;

const DivHeader = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  top: 0;
  position: fixed;
  z-index: 3;
  width: 100%;
  background-color: white;

  h1 {
    display: flex;
    height: 100px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 0 0 170px;
  }

  button {
    margin: 20px;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Header = props => {
  console.log(props);
  const logoutHandler = ev => {
    props.logout(props.history);
  }

  return (
    <DivWrapper>
      <DivSpacer />
      <DivHeader>
        <h1>International&nbsp;Rural&nbsp;School&nbsp;Report</h1>
        <button onClick={ev => logoutHandler(ev)}>Logout</button>
      </DivHeader>
    </DivWrapper>
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn
  }
};

export default connect(
  mapStateToProps,
  { logout }
)(Header);