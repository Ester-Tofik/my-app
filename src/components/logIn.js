import React from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "../styles/login.css";
import logo from '../img/aa.jpg';


export default function LogIn() {

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                </div>
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Identity" /><br />
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" />
                    <br /><br />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#">create new user</a>
                </div>
            </div>
        </div>
    );
}


