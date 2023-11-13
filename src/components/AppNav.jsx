import { Link } from "react-router-dom"
import './AppNav.css'
import axios from "axios";


const AppNav = (props)  => {


    const handleLogout = () =>{

        axios.post("https://akademia108.pl/api/social-app/user/logout", {
        })
        .then((req) => {
            localStorage.removeItem('user');
            props.setUser(null)
        })
            .catch((error) => {
                console.error(error);
            });
    
    }
    console.log(props);

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
                {props.user && <li>
                    <Link onClick={handleLogout} to="/">Logout</Link>
                </li>}
            </ul>
        </div>
    );

   
}


export default AppNav;