import "../styles/signUp.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "../styles/login.css";
import logo from '../img/aa.jpg';
import { useEffect, useState } from "react";
import { updateUserDetails } from "../api/userService";
import AccountMenu from "./menu";
import store from "../store";
import loginInAction from '../action/action';
import { useHistory } from "react-router-dom";


export default function EditUserDetails() {
	const [firstName, setFirstName] = useState(store.getState().user.firstName);
	const [lastName, setLastName] = useState(store.getState().user.lastName);
	const [id, setId] = useState(store.getState().user.id);
	const [email, setEmail] = useState(store.getState().user.email);
	const [password, setPassword] = useState(store.getState().user.password);
	const [phoneNumber, setPhoneNumber] = useState(store.getState().user.phoneNumber);
	const [birthDate, setBirthDate] = useState(store.getState().user.birthDate.slice(0,10));

	useEffect(() => {
		console.log(firstName, lastName, id, email, password, phoneNumber, birthDate);

	});
    const history = useHistory();

	async function update() {
		const updatedUser = await updateUserDetails(id, password, firstName, lastName, phoneNumber, store.getState().user.birthDate, email,store.getState().user._id);
		store.dispatch(loginInAction(updatedUser));
		console.log(store.getState());
		history.push('/home');
	}
	return (
		<div className="wrapper fadeInDown">
			<div id="formContent">
				<div className="fadeIn first">
					<AccountMenu></AccountMenu>
					<img src={logo} id="icon" alt="User Icon" />
				</div>
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="first name" onChange={e => setFirstName(e.target.value)} value={firstName} /><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="last name" onChange={e => setLastName(e.target.value)} value={lastName} /><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="Identity" onChange={e => setId(e.target.value)} value={id}/><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="email" onChange={e => setEmail(e.target.value)} value={email}/><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="phone" onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}/><br />
				<input type="date" id="login" className="fadeIn second" name="login" placeholder="birthdate" onChange={e => setBirthDate(e.target.value)} value={birthDate}/><br />
				<input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password}/><br />
				<br />
				<input type="submit" className="fadeIn fourth" value="save" onClick={update} />
			</div>
		</div>
	);
}

