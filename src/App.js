import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import useFetch from './hooks/useFetch';
import NavBar from './components/NavBar';
import Recipe from './pages/Recipe';
import Home from "./pages/Home"
import CardElement from './pages/CardElement';
import Search from "./pages/Search";
import SearchItems from './pages/SearchItems';

function App() {



  const data = () =>{

  }

  return (
    <BrowserRouter>

      <NavBar/>
        
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/search' element={<Search data={data}/>}></Route>
          <Route path='/recipe' element={<Recipe/>}></Route>
          <Route path='cook/:id' element={<CardElement/>}></Route>
          <Route path='searchItems' element={<SearchItems/>}></Route>
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
