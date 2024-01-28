import axios from "axios";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import AppNav from "./components/AppNav";
import { useState, useEffect } from "react";
import Popup from "./views/Popup";

function App(props) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [popupVisible, setPopupVisible] = useState(false);

  axios.defaults.headers.common["Authorization"] =
    "Bearer " + (user ? user.jwt_token : "");

  useEffect(() => {
    if (!props.user) {
      const timeout = setTimeout(() => {
        setPopupVisible(true);
      }, 5000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [props.user]);

  return (
    <div className="App">
      <AppNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
      <Popup
        user={user}
        setUser={setUser}
        popupVisible={popupVisible}
        setPopupVisible={setPopupVisible}
      />
    </div>
  );
}

export default App;
