import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import useFetch from './hooks/useFetch';

function App() {

  const {data} = useFetch("http://localhost:3000/recipy")
  return (
    <BrowserRouter>

        <div className="App">
          <h1>Hello</h1>
        </div>
    
    </BrowserRouter>
  );
}

export default App;
