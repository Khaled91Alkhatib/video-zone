import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import "../styles/Navbar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Stack className='navbar-stack' direction="row">
      <Link to="/" className='navbar-link'>
        <div className="app-name">Video<FontAwesomeIcon icon={faFilm} className="icon" />Zone</div>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;