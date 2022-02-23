import React, {useState} from 'react';
import { Navbar, Column, Button, Dropdown } from 'rbx';
import logoImage from '../../assets/images/tafernotes-logo.png'
import "../../styles/header.scss";
import UsersService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'

function UserEditHeader(props) {
  const [navigateToHome, setNavigateToHome] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user'));
    
  const logOut = async () => {
    await UsersService.logout();
    setNavigateToHome(true);
  }

  if (navigateToHome === true)
    return <Navigate to={{ pathname: "/" }} />

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={logoImage} alt="tafernotes-logo"/>
            </Link>
          </Column>
        </Column.Group>
        <Navbar.Burger
          className="navbar-burger burger" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="navbar-menu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
        </Navbar.Segment>
        <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
          <Navbar.Item as="div">
            <Dropdown>
              <Dropdown.Trigger>
                <Button className="button" color="white" outlined>
                  <span>{JSON.parse(user)['name']} ▼</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu>
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/notes">Notes</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <a href="#" onClick={e => logOut()}>LogOut</a>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

export default UserEditHeader;
