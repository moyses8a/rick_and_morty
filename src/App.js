import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Character from './pages/character/character';

function App() {
  return (
    <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route index path='/character/:id' element={<Character/>}/>
    </Routes>
  );
}

export default App;
