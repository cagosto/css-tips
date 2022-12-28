import { Button, createTheme, ThemeProvider, Box } from '@mui/material';
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import FlexBoxLayouts from './layouts/flexbox';
import GridLayout from './layouts/grids';

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
        <Box>
          <Button variant="text" component={Link} to="/flex">
            Flex
          </Button>
          <Button variant="text" component={Link} to="/grid">
            Grid
          </Button>
        </Box>
        <Routes>
          <Route path="flex" element={<FlexBoxLayouts />} />
          <Route path="grid" element={<GridLayout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

