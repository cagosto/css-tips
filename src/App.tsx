import { createTheme, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FlexBoxLayouts from './layouts';

function App() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,

        lg: 1200,
        xl: 1600,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route index element={<FlexBoxLayouts />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

