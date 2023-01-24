
import { Link } from "react-router-dom";
const NavBar = () => {
    return ( 
        <div class="nav-bar">
            <h2 class="logo">Blog Share</h2>
            <nav class="nav-list">
                <Link to="/">home</Link>
                <Link to="/blog">blog</Link>
            </nav>
        </div>
     );
}
 
export default NavBar;