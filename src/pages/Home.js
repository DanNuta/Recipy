import { useEffect, useState } from "react";
import {projectFirestore} from "../firebase/config";
import Card from "../pages/Card";


const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() =>{
        setIsLoading(true);

       const unsub = projectFirestore.collection("recipes").onSnapshot((res) => {
            if(res.empty){
                setIsLoading(false)
                setError("Nu exista date de afisat")
            }else{
                let counter = [];
                res.docs.forEach(item =>{
                    counter.push({id: item.id, ...item.data()})
                })
                setIsLoading(false)
                setData(counter)

            }
        }, (err) =>{
            setIsLoading(false)
            setError(err.message)
        })

        return () => unsub()

    }, [])




    return ( 
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data.map((item, index) => (
                <Card key={index} item={item}/>
            ))}
        </div>
     );
}
 
export default Home;