import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Student from './pages/student';
import { Switch } from '@headlessui/react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/students" element={<Student />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
