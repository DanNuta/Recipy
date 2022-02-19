import {Link, Routes, Route} from "react-router-dom";
import CardElement from "./CardElement";

const Card = ({item}) => {

    return ( 
        <div key={item.id}>
            <h1>{item.title}</h1>
            {item.ingredients.map(el => (
                <li>{el}</li>
            ))}
            <p>{item.method}</p>
            <p>{item.time} min</p>
            <Link to={`cook/${item.id}`}><button>Cook this</button></Link>

        </div>
     );
}
 
export default Card;