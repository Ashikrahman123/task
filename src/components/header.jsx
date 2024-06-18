// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import profileImg from '../assets/images/profile.jpg';

const HeaderContainer = styled.header`
  background-color: #3f51b5;
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const SearchBar = styled.input`
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  font-size: 1em;
  width: 300px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Cloud Share</Logo>
      <SearchBar type="text" placeholder="Search product" />
      <Profile>
        <i className="fa fa-bell"></i>
        <ProfileImage src={profileImg} alt="Profile" />
      </Profile>
    </HeaderContainer>
  );
};

export default Header;