import { useEffect, useState } from "react";


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() =>{

        const fetchData = async () =>{
           try{
            const data = await fetch(url);
            const json = await data.json()

            if(!data.ok){
                throw new Error()
            }
            setData(json)

           }catch(e){

           }
        }


        fetchData();
    }, [url])



    return {data, isLoading, error}

    
    
}
 
export default useFetch;