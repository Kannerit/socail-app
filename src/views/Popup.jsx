import LoginForm from "../components/LoginForm";
import "./Popup.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Popup = (props) => {
  const [popupVisible, setPopupVisible] = useState(false);

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

  const closePopup = () => {
    setPopupVisible(false);
  };

  if(props.user) {
    return null;
  }

  
  return (
    <div>
      {popupVisible && (
        <div className="popup">
          <button className="closeBtn" onClick={() => closePopup()}>
            x
          </button>
          <h3 className="PopupSign">Already have an account?</h3>
          <LoginForm setUser={props.setUser} closePopup={closePopup} />
          <h4>
            No? Create an account!{" "}
            <Link to="/signup" className="link" onClick={closePopup}>
              Signup
            </Link>{" "}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Popup;
