import React from 'react'
import EmailMe from '../EmailMe'
import { Wrapper, Nav, NavItem, NavLink } from './style'

const Menu = () =>
  <Wrapper>
    <Nav>
      <NavItem>
        <a href="https://www.linkedin.com/company/rhodium-labs/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
      </NavItem>
      <NavItem>
        <a href="https://www.facebook.com/rhodiumlabs/" rel="noopener noreferrer" target="_blank">Facebook</a>
      </NavItem>
      <NavItem>
        <a href="https://twitter.com/rhodiumlabs?lang=en" rel="noopener noreferrer" target="_blank">Twitter</a>
      </NavItem>
      <NavItem>
        <a href="https://github.com/rhodiumlabs" rel="noopener noreferrer" target="_blank">GitHub</a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem>
        <NavLink to='/'>Index</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/works'>Works</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to='/about'>About</NavLink>
      </NavItem>
      <NavItem highlight><EmailMe text="Contact"/>
    </NavItem>
    </Nav>
  </Wrapper>

export default Menu
