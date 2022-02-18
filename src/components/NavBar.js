import {Link} from "react-router-dom";
const NavBar = () => {

    return ( 
        <nav>
            <ul>
                <li><Link to="/">Cocking Ninja</Link></li>
                <li><Link to="search">Search <input type="text"></input></Link></li>
                <li><Link to="recipe">Create Recipe</Link></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;