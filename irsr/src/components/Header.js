import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

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
  return (
    <DivWrapper>
      <h1>International&nbsp;Rural&nbsp;School&nbsp;Report</h1>
      <button onClick={() => window.localStorage.clear()}>Logout</button>
    </DivWrapper>
  );
}

export default Header;