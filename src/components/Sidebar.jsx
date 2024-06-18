// src/components/Sidebar.js
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarContainer = styled.nav`
  background-color: #3f51b5;
  color: white;
  width: 250px;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const NavItem = styled(NavLink)`
  color: white;
  text-decoration: none;
  margin: 10px 0;
  font-size: 1.2em;

  &.active {
    font-weight: bold;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <NavItem to="/dashboard">Dashboard</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
      <NavItem to="/settings">Settings</NavItem>
      {/* Add more navigation items as needed */}
    </SidebarContainer>
  );
};

export default Sidebar;