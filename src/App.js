import './App.css';
import AddManifest from './pages/AddManifest/AddManifest';
import Homepage from './pages/Homepage/Homepage';
import VerifyManifest from './pages/VerifyManifest/VerifyManifest';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<AddManifest />} path='/addManifest' />
        <Route element={<VerifyManifest />} path='/verifyManifest'/>
      </Routes>
    </Router>
  );
}

export default App;
