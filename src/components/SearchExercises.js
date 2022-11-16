import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const SearchExercises = () => {
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
                    value=''
                    placeholder='Search Exercises'
                    onChange={e => {}}
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
                    }}>
                    Search
                </Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;
