import React from 'react';
import styled from 'styled-components';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  background-color: black;
  color: white;
  min-width: 100%;
  min-height: 100%;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;


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
      <p>Footer, not sure what to put in here yet...</p>
      <p>ipsum asdjfhopdsahfpwsaeobfjpwdasfbpasdbfap</p>
    </DivWrapper>
  );
}

export default Footer;