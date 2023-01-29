import React, { useEffect, useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Video } from './index'
import { fetchFromAPI } from '../util/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
      <Typography variant='h4' fontWeight='bold' md={2} sx={{ color: 'white' }}>
        Search Result for: <span style={{ color: '#F31503' }}>{searchTerm} video</span>
      </Typography>
      <Video videos={videos} />
    </Box>
  )
}

export default SearchFeed;