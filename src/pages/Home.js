import { useEffect } from "react";
import {projectFirestore} from "../firebase/config";
import Card from "../pages/Card";


const Home = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() =>{
        setIsLoading(true);

        projectFirestore.collection

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