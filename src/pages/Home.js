import useFetch from "../hooks/useFetch";
import Card from "../pages/Card";


const Home = () => {


    const {data, error, isLoading} = useFetch("http://localhost:3000/recipy")

    return ( 
        <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data.map(item => (
                <Card item={item}/>
            ))}
        </div>
     );
}
 
export default Home;