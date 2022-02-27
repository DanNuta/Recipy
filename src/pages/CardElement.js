import { useParams } from "react-router-dom";
import {projectFirestore} from "../firebase/config";
import useFetch from "../hooks/useFetch";
import {useEffect, useState} from "react";

const CardElement = () => {

    const {id} = useParams();


    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() =>{

      const unsub = projectFirestore.collection("recipes").doc(id).onSnapshot(res =>{
            if(res.exists){
                setIsLoading(false);
                setData(res.data());
            }else{
                setIsLoading(false)
                setError("Nu exista acest produs")
            }
        })

        return () => unsub()

    }, [id])



    const update = () =>{
        projectFirestore.collection("recipes").doc(id).update({
            title: 'Change'
        })
    }

    
    

    

    console.log(data.ingredients)

    return ( 
        <div>
            {error && <h3>{error}</h3>}
            {isLoading && <h2>Loading...</h2>}
            <h1>{data.title}</h1>
            <p>{data.method}</p>
            <p>{data.time} min</p>
           <button onClick={update}>Update me</button>

        </div>
     );
}
 
export default CardElement;