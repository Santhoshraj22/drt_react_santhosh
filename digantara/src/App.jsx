import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SelectedPage from './Pages/SelectedPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selected" element={<SelectedPage />} />
    </Routes>
  );
}

export default App;
