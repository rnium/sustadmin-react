import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import Button from '@mui/material/Button'
import UserInfo from './UserInfo';
import LogoutIcon from '@mui/icons-material/Logout';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { NavLink } from 'react-router-dom';
import {logoutUrl} from '../../BackendUrls'

function Navabr(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  console.log(props.userInfo);
  return (
    <div>
      <Navbar color="light" expand="sm" className="py-2 mb-3 bg-material shadow-sm" >
        <NavbarBrand className='ms-4' href="/">
          <div className='brand'>
            <img style={{width: '60px'}} alt='sys-logo' src='/static/lg2.svg' />
            <div className="info">
                <span className='system'>Result Administration</span>
                <span className='inst text-muted'>Sylhet Engineering College</span>
            </div>
          </div>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto ms-5 row-flexer" navbar>
            <NavItem>
              <NavLink to="/sust/home/" className='nav-link'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/sust/customdoc/" className='nav-link'>CustomDoc</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink to="/sust/profile/" className='nav-link'>Profile</NavLink>
            </NavItem> */}
            {
              props.searchBarOpen ?
                null
                : (<NavItem>
                    <Button onClick={()=>props.openSearchbar()} variant="outlined" startIcon={<YoutubeSearchedForIcon size="large" />}>Search</Button>
                  </NavItem>)
            }
          </Nav>
          <UserInfo username={props.userInfo.firstname} avatarSrc={props.userInfo.avatar_url} />
          <Button 
            variant="outlined"
            color='error'
            endIcon={<LogoutIcon />}
            href={logoutUrl}
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

export default Navabr;