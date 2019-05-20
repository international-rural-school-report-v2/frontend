import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import '../styles/nav.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

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
        <Navbar 
          vertical 
          className='irsr-nav' 
          color="faded" light 
          expand="md" 
        >
          <NavbarToggler onClick={this.toggle} />
          {/* <NavbarBrand href="/">IRSR</NavbarBrand> */}
          
          <Collapse isOpen={this.state.isOpen} navbar className="nav-collapse" >
            <Nav vertical className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" activeClassName="active" to="/issues">Issues</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
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