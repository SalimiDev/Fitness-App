import React, { useState } from 'react';
import { Box } from '@mui/material';
//components
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <div>
            <Box>
                <HeroBanner />
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
                <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
            </Box>
        </div>
    );
};

export default Home;
