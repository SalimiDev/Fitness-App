import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ExerciseDetail from './components/pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
    return (
        <Box width='400px' className='App' sx={{ width: { xl: '1488px' } }} m='auto'>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExerciseDetail />} />
            </Routes>

            <Footer />
        </Box>
    );
}

export default App;
