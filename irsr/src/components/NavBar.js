import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';

import '../styles/nav.css';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
`;

const DivSpacer = styled.div`

  display: flex;
  min-width: 170px;
  height: 100%;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <DivWrapper>
        <DivSpacer />
        <Navbar
          className='irsr-nav'
          color="faded" light
          expand="md"
        >
          <NavbarToggler onClick={this.toggle} />
          {/* <NavbarBrand href="/">IRSR</NavbarBrand> */}

          <Collapse isOpen={this.state.isOpen} navbar className="nav-collapse" >
            <Nav vertical className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/issues">Issues</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/teacher-attendance">Teacher&nbsp;Attendance</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,

  }
};

export default connect(
  mapStateToProps,
  { login }
)(NavBar);