import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../j-studios.png';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJ } from '@fortawesome/free-solid-svg-icons';

const Home = (props) => {
    const { loggedIn, email } = props
    const navigate = useNavigate();

    const onButtonClick = () => {
        if (loggedIn) {
            localStorage.removeItem("user")
            props.setLoggedIn(false)
        } else {
            navigate("/login")
        }
    }
    

    return(
        <div className="home-container">
              <img  className="j-studios" src={logo} alt="Jayz-Studios" />
              <FontAwesomeIcon className="j-icon" icon={faJ} shake size="xl" style={{color: "#ffffff",}} />
            <div className="title-container">
                    <h4>Welcome to Jayz STUDIOS!</h4>
                </div>
                <div>
                <p>This is the Home Page!</p>
                </div>
                <div className={"button-container"}>
                <input
                    className={"input-button"}
                    type="button"
                    onClick={onButtonClick}
                    value={loggedIn ? "Log out" : "Log in"}
                />
                {(loggedIn ? <div>
                    Your email address is {email}
                </div> : <div/>)}
           </div>

        </div>
    )
}
export default Home;