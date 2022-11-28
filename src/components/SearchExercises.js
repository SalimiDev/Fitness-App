import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    const BASE_URL = 'https://exercisedb.p.rapidapi.com';

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData(`${BASE_URL}/exercises/bodyPartList`, exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData(`${BASE_URL}/exercises`, exerciseOptions);

            const searchedExercises = exercisesData.filter(
                exercise =>
                    exercise.name.toLowerCase().includes(search) ||
                    exercise.target.toLowerCase().includes(search) ||
                    exercise.equipment.toLowerCase().includes(search) ||
                    exercise.bodyPart.toLowerCase().includes(search),
            );
            setSearch('');
            setExercises(searchedExercises);
        }
    };

    return (
        <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
            <Typography fontWeight={700} mb='50px' textAlign='center' sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
                Awesome Exercises You
                <br /> Should Know
            </Typography>
            <Box position='relative' mb='72px'>
                <TextField
                    sx={{
                        input: { fontWeight: '700px', border: 'none', borderRadius: '4px' },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px',
                    }}
                    height='76px'
                    type='text'
                    value={search}
                    placeholder='Search Exercises'
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                />
                <Button
                    className='search-btn'
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        fontSize: { lg: '20PX', xs: '14PX' },
                        width: { lg: '175px', xs: '80px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0',
                    }}
                    onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </Box>
        </Stack>
    );
};

export default SearchExercises;
