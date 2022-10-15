import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Videos } from '../components';
import { fetchFromAPI } from '../utilities/fetchFromAPI';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        // console.log(data)
        setVideos(data.items);
      });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }} display="flex" flexDirection="column" alignItems="center" >
      <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: "white" }} >
        Search results for
        <span style={{ color: "#FC1503" }}>
          &nbsp;{searchTerm}
        </span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;