import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/system';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { CurrenciesConvertor } from './pages/CurrenciesConverter';
import { ExchangeRates } from './pages/ExchangeRates';
import Container from '@mui/material/Container';
import { Navbar } from './components/NavBar/Navbar';

function App() {
  return (
    <Provider store={store}>
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
                <Route path='currencies' element={<ExchangeRates />} />
                <Route path='*' element={<Navigate to='/' />} />
              </Routes>
            </Router>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
