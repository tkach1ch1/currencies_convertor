import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/theme';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CurrenciesConvertor } from './pages/CurrenciesConvertor';
import { CurrenciesList } from './pages/CurrenciesList';
import Container from '@mui/material/Container';
import { Navbar } from './components/NavBar/Navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Container
          maxWidth={'md'}
          disableGutters={true}
          sx={{
            bgcolor: 'white',
            mt: '80px',
            mb: '80px',
            borderRadius: '10px',
            height: '80vh',
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
    </ThemeProvider>
  );
}

export default App;
