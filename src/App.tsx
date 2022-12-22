import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FlexBoxLayouts from './layouts';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<FlexBoxLayouts />} />
      </Routes>
    </Router>
  );
}

export default App;

