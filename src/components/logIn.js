import React, { useEffect, useState } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "../styles/login.css";
import logo from '../img/aa.jpg';
import { connect } from 'react-redux';
import { saveBirthDate, saveEmail, saveFirstName, saveLastName, saveMedicines, savePassword, savePhoneNumber, save_id, saveid } from '../action/action.js';
import { logInByEmailAndPassword } from '../api/userService';
import { useHistory } from "react-router-dom";

function LogIn(props) {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    async function getUserByEmailAndPassword() {
        const currentUser = await logInByEmailAndPassword(id, password);
        console.log(currentUser);
        history.push('/home');
        //  saveInRedax(user.result);
        await logInByEmailAndPassword(id, password).then(user => {
            console.log(user);
            console.log(saveInRedax(user), "user in redux");
        });
    }

    const saveInRedax = (user) => {
        props.saveid(user.id)
        props.saveFirstName(user.firstName)
        props.saveLastName(user.lastName)
        props.saveEmail(user.email)
        props.savePassword(user.password)
        props.savePhoneNumber(user.phoneNumber)
        props.saveBirthDate(user.birthDate)
        props.saveMedicines(user.medicines)
        props.save_id(user._id)
    }

    useEffect(() => {
        console.log(id, password);
    }, [id, password])

    const history = useHistory();
    const signUp = () => {
        history.push('/signUp');
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <img src={logo} id="icon" alt="User Icon" />
                </div>
                <input type="text" id="login" className="fadeIn second" name="login" placeholder="Identity" onChange={e => setId(e.target.value)} />
                <br />
                <input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                <br /><br />
                <input type="submit" className="fadeIn fourth" value="Log In" onClick={() => getUserByEmailAndPassword()} />
                <div id="formFooter">
                    <a className="underlineHover" href="#" onClick={() => signUp()}>create new user</a>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    };
}

export default connect(mapStateToProps, { saveBirthDate, saveEmail, saveFirstName, saveLastName, saveMedicines, savePassword, savePhoneNumber, save_id, saveid })(LogIn);


