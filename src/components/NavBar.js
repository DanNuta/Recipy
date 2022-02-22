import {Link} from "react-router-dom";
import Search from "../pages/Search";
import { ThemeColor } from "../context/ThemeColor";
import { useContext } from "react";



const NavBar = () => {

    const {color, changeColor} = useContext(ThemeColor)

    return ( 
        <nav style={{background: color}}>
            <ul>
                <li><Link to="/">Cocking Ninja</Link></li>
                <li><Search/></li>
                <li><Link to="recipe">Create Recipe</Link></li>
            </ul>


            <div className="color">
                <button onClick={() => changeColor("red")}>Red</button>
                <button onClick={() => changeColor("green")}>Green</button>
                <button onClick={() => changeColor("pink")}>Pink</button>
            </div>
        </nav>
     );
}
 
export default NavBar;