import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import LoginForm from '../components/LoginForm';
import Signup from '../views/Signup';
import Popup from '../views/Popup';

const AppRoutes = (props) => {
    return (
        <Routes>
            <Route path="/" element={<Home user={props.user}/>}/>
            <Route path="/login" element={<LoginForm user={props.user} setUser={props.setUser} />}/>
            <Route path="/" element={<Popup user={props.user} setUser={props.setUser} />}/>
            <Route path="/signup" element={<Signup user={props.user}/>}/>
            
        </Routes>
    );
}   

export default AppRoutes; 