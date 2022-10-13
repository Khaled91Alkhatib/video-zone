import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import { logo } from '../utilities/constants';
import SearchBar from './SearchBar';
import "../styles/Navbar.scss";

const Navbar = () => {
  return (
    <Stack className='navbar-stack' direction="row">
      <Link to="/" className='navbar-link'>
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;