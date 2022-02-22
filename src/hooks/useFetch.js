import { useEffect, useState } from "react";


const useFetch = (url, method = "GET") => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const [option, setOption] = useState(null);


    const postData = (postData) =>{
        setOption({
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(postData)

        })

    }


    useEffect(() =>{

        const fetchData = async (fetchOptions) =>{
            setIsLoading(true)
           try{
            const data = await fetch(url, {...fetchOptions});
            const json = await data.json();

            if(!data.ok){
                throw new Error()
            }

            setData(json);
            setError(null);
            setIsLoading(false);

           }catch(e){
               setError("Nu se poate adauga date");

           }
        }


        if(method === "GET"){
            fetchData();
        }

        if(method === "POST" && option){
            fetchData(option);
        }


        
    }, [url, method, option])



    return {data, isLoading, error, postData}

    
    
}
 
export default useFetch;