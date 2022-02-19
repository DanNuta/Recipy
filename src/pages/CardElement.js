import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CardElement = () => {

    const {id} = useParams();

    
    const url = `http://localhost:3000/recipy/${id}`;

    const {data, error, isLoading} = useFetch(url)

    console.log(data.ingredients)

    return ( 
        <div>
            {error && <h3>{error}</h3>}
            {isLoading && <h2>Loading...</h2>}
            <h1>{data.title}</h1>
            <p>{data.method}</p>
            <p>{data.time} min</p>

        </div>
     );
}
 
export default CardElement;