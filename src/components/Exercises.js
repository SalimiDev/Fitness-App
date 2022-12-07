import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFristExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFristExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    return (
        <Box id='exercises' sx={{ mt: { lg: '110px' } }} mt='50px' p='20px'>
            <Typography variant='h3' mb='46px'>
                Showing Results
            </Typography>

            <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt='100px' alignItems='center'>
                {exercises.length > 9 && (
                    <Pagination
                        color='standard'
                        shape='rounded'
                        size='large'
                        defaultPage={1}
                        page={currentPage}
                        onChange={paginate}
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;
