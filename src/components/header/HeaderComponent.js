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
  NavbarText,
} from 'reactstrap';

import Button from '@mui/material/Button'
import UserInfo from './UserInfo';
import LogoutIcon from '@mui/icons-material/Logout';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="sm" className="py-4 mb-3" >
        <NavbarBrand className='ms-4' href="/">SEC RDB</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
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