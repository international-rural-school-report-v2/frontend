import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  background-color: rgb(128, 128, 128);
  color: white;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  position: relative;
  z-index: 10;


  p {
    margin: 25px;
    text-align: center;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const Footer = props => {
  return (
    <DivWrapper>
      <p>MIT Licensed - IRSR 2019</p>
    </DivWrapper>
  );
}

export default Footer;