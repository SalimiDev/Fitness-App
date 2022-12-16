import Reac, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

//components
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, youtubeOptions, fetchData } from '../utils/fetchData';

const ExerciseDetail = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [exerciseVideos, setExerciseVideos] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            const exerciseVideosData = await fetchData(
                `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
                youtubeOptions,
            );

            setExerciseDetail(exerciseDetailData);
            setExerciseVideos(exerciseVideosData.contents);
        };
        fetchExercisesData();
    }, [id]);

    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail} />
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
            <SimilarExercises />
        </Box>
    );
};

export default ExerciseDetail;
