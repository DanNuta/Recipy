import {Link, Routes, Route} from "react-router-dom";
import CardElement from "./CardElement";
import { useContext, useState, useEffect } from "react";
import {ThemeColor} from "../context/ThemeColor";

const Card = ({item}) => {


    const {dark,  darkMode} = useContext(ThemeColor);

    const [light, setLight] = useState(true)
    

   

    
    useEffect(() =>{
        
            darkMode(light ? {background: "black", color: "white"} : {background: "white", color: "black"})
        
    }, [light])

    

   

   

    return ( 
        <div style={{background: dark.background, color: dark.color}} key={item.id}>
            <h1>{item.title}</h1>
            
            
            <p>{item.method}</p>
            <p>{item.time} min</p>
            <Link to={`cook/${item.id}`}><button>Cook this</button></Link>
            <button onClick={() => setLight(!light)}>DarkMode</button>
        </div>
     );
}
 
export default Card;