import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    //pagination
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFristExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFristExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);

        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    //handle set category filter
    const BASE_URL = 'https://exercisedb.p.rapidapi.com';
    
    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData(`${BASE_URL}/exercises`, exerciseOptions);
            } else {
                exercisesData = await fetchData(`${BASE_URL}/exercises/bodyPart/${bodyPart}`, exerciseOptions);
            }

            setExercises(exercisesData);
        };
        fetchExercisesData();
    }, [bodyPart]);

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
