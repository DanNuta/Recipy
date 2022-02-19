import {Link} from "react-router-dom";
import Search from "../pages/Search";
const NavBar = () => {

    return ( 
        <nav>
            <ul>
                <li><Link to="/">Cocking Ninja</Link></li>
                <li><Search/></li>
                <li><Link to="recipe">Create Recipe</Link></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;