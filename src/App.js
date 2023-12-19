import axios from 'axios';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import AppNav from './components/AppNav';
import { useState } from 'react';
import Popup from './views/Popup';
import LoginForm from './components/LoginForm';



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = "Bearer" + (user ? user .jwt_token : "");

  return (
    <div className="App">
      <AppNav user={user} setUser={setUser}/>
      <AppRoutes user={user} setUser={setUser}/>
      <Popup user={user} setUser={setUser}/>
    </div>
  );
}

export default App;

