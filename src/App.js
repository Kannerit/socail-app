import axios from 'axios';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import AppNav from './components/AppNav';
import { useState } from 'react';
import { useRouteError } from 'react-router-dom';

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = "Bearer" + (user ? user .jwt_token : "");

  return (
    <div className="App">
      <AppNav user={useRouteError}/>
      <AppRoutes user={user} setUser={setUser}/>
    </div>
  );
}

export default App;

