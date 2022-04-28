import navbar from './Webiste Bits/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
