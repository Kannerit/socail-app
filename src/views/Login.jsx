import '../components/LoginForm'
import { Navigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = (props) => {
    return (
        <div className="login">
            {props.user && <Navigate to="/" />}
            <LoginForm/>
        </div>
    )
}




export default Login;