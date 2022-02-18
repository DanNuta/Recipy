import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import useFetch from './hooks/useFetch';
import NavBar from './components/NavBar';
import Recipe from './pages/Recipe';
import Home from "./pages/Home"

function App() {

  return (
    <BrowserRouter>

      <NavBar/>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search'></Route>
          <Route path='/recipe' element={<Recipe/>}></Route>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
