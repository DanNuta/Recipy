import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Search = (props) => {

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const searchItem = (e) =>{
        e.preventDefault();
        navigate(`searchItems?q=${search}`)
    }

    return ( 
        <form onSubmit={searchItem}>
            <label htmlFor="search">search</label>
            <input onChange={(e) =>setSearch(e.target.value)} type="text" id="search"  value={search}/>
        </form>
     );

     return {search}
}
 
export default Search;