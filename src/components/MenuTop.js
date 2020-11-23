import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
    Link
  } from "react-router-dom";

import {Item} from '../context/createItem';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className='menu'>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                  <Link to='/'>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to='/products'>Products</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Item.Consumer>
                {({item}) => <Link to='/card'>Card ({item.length})</Link>}
              </Item.Consumer>
                
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;