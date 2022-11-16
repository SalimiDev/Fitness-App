import React, { useState } from 'react';
import { Box } from '@mui/material';
//components
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
    return (
        <div>
            <Box>
                <HeroBanner />
                <SearchExercises />
                <Exercises />
            </Box>
        </div>
    );
};

export default Home;
