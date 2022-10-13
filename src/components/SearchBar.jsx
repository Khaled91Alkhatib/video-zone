import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from "@mui/icons-material";

import "../styles/SearchBar.scss";

const SearchBar = () => {
  return (
    <Paper className='main-search-layout' component="form" onSubmit={() => { }} sx={{ borderRadius: 20, mr: { sm: 5 } }}>
      <input className='search-bar' placeholder='Search...' value="" onChange={() => { }} />
      <IconButton type='submit' className='search-button' sx={{ color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;