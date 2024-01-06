import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import Button from '@mui/material/Button'
import UserInfo from './UserInfo';
import LogoutIcon from '@mui/icons-material/Logout';
import {Typography, Stack} from '@mui/material'

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="sm" className="py-3 mb-3 bg-material" >
        <NavbarBrand className='ms-4' href="/">
          <div className='brand'>
            <img style={{width: '50px'}} alt='sys-logo' src='lg2.svg' />
            <div className="info">
                <span className='system'>Result Administration</span>
                <span className='inst text-muted'>Sylhet Engineering College</span>
            </div>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto ms-5" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <UserInfo username="Rnium" avatarSrc="https://upload.wikimedia.org/wikipedia/commons/3/32/Star_Wars_-_Darth_Vader.jpg" />
          <Button 
            variant="outlined"
            color='error'
            endIcon={<LogoutIcon />}
            sx={{ 
              borderRadius: "180px",
              margin: "0 15px", }}
            >
            Logout
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;