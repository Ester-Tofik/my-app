import React, { useEffect, useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "../styles/login.css";
import logo from '../img/aa.jpg';
import { connect } from 'react-redux';
import { saveInRedax } from '../action/action';
import { logInByEmailAndPassword } from '../api/userService';
import { useHistory } from "react-router-dom";

export default function LogIn(props) {

    const [id, setId] = useState(" ");
    const [password, setPassword] = useState(" ");

    async function getUserByEmailAndPassword() {
        history.push('/home');
        const currentUser = await logInByEmailAndPassword(id, password);
        console.log(currentUser);
        //  saveInRedax(user.result);
    }

    useEffect(() => {
        console.log(id, password);
    }, [id, password])



    const history = useHistory();
    const signUp = () => {
        history.push('/signUp');
    }
    const mapStateToProps = ({ user }) => {
        return {
            ...user
        };
    }

    connect(mapStateToProps, { saveInRedax })(LogIn);

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                </div>
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="Identity" onChange={e => setId(e.target.value)} />
                    <br />
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <br /><br />
                    <input type="submit" className="fadeIn fourth" value="Log In" onClick={getUserByEmailAndPassword} />
                </form>
                <div id="formFooter">
                    <a className="underlineHover" href="#" onClick={() => signUp()}>create new user</a>
                </div>
            </div>
        </div>
    );
}


