import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
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
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Identity" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="Password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

                <div id="formFooter">
                    <a className="underlineHover" href="#">Forgot Password?</a>
                </div>

            </div>
        </div>
    );
}


