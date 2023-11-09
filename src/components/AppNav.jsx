import { Link } from "react-router-dom"
import './AppNav.css'

const AppNav = (props)  => {
    return(
        <div className="mainNav">
            <ul>
                <li>
                    <Link to="/">Home</Link>  
                </li>
                {!props.user && <li>
                    <Link to="/login">Login</Link>  
                </li>} 
                {!props.user && <li>
                    <Link to="/signup">Signup</Link>  
                </li>}
            </ul>
        </div>
    );
}

export default AppNav;