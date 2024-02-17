import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import RepoPage from './RepoPage';

function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path="/:userName" element={<ProfilePage/>}/>
      <Route path="/:userName/repos" element={<RepoPage/>}/>
      <Route path="/" element={<HomePage/>}/>
    </Routes>
    </div>
  );
}

export default App;
