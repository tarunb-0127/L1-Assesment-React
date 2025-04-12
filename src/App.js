
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import VehiclesPage from './Pages/VehiclesPage';
import FormPage from './Pages/FormPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<VehiclesPage/>} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
