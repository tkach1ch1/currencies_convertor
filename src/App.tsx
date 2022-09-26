import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CurrenciesConvertor } from './pages/CurrenciesConvertor';
import { CurrenciesList } from './pages/CurrenciesList';
import Container from '@mui/material/Container';
import { Navbar } from './components/NavBar/Navbar';

function App() {
  return (
    <CssBaseline>
      <Container
        maxWidth={'md'}
        disableGutters={true}
        sx={{
          bgcolor: 'white',
          mt: '80px',
          mb: '80px',
          borderRadius: '10px',
          height: '1000px',
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<CurrenciesConvertor />} />
            <Route path='currencies' element={<CurrenciesList />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </Router>
      </Container>
    </CssBaseline>
  );
}

export default App;
