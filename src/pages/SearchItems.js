import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "./Card";
import { useState } from "react";
import Search from "./Search";


const SerachItems = () => {

    

    const search = useLocation().search;

    const queryParams = new URLSearchParams(search);
    const produs = queryParams.get("q")
    const url = `http://localhost:3000/recipy${search}`;
    const {data, isLoading, error} = useFetch(url);

    


    console.log(queryParams)

   

    return ( 
        <div>
            {data.length == 0 || produs === "" ? <h2>Acest produs "{produs}" nu exista</h2> :
            <div> {isLoading && <h1>loading...</h1>}
            {data.map(item =>(
                <Card item={item}/>
            ))}</div>
            }
           

            
        </div>
     );
}
 
export default SerachItems;