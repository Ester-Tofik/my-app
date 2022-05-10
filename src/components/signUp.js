import "../styles/signUp.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "../styles/login.css";
import logo from '../img/aa.jpg';
import { useEffect, useState } from "react";
import { signUpApi } from "../api/userService";
import { Calendar } from 'primereact/calendar';
import { useHistory } from "react-router-dom";
// import { Calendar } from 'primereact/calendar';


export default function SignUp() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] =useState("");
	const [id, setId] =useState("");
	const [email, setEmail] =useState("");
	const [password, setPassword] =useState("");
	const [phoneNumber, setPhoneNumber] =useState("");
	const [birthDate, setBirthDate] =useState(null)

	const history = useHistory();
	useEffect(() => {
		console.log(firstName, lastName, id, email, password, phoneNumber, birthDate)
		//document.title = `You clicked ${count} times`;
	  }, [firstName, lastName, id, email, password, phoneNumber, birthDate]);

	  async function signUp (){
		  const newUser = await signUpApi(id, password, firstName, lastName, phoneNumber, birthDate, email);
		  console.log(newUser);
		  history.push('/home');
	  }
	return (
		<div className="wrapper fadeInDown">
		<div id="formContent">
			<div className="fadeIn first">
				<img src={logo} id="icon" alt="User Icon" />
			</div>

			{/* <form> */}
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="first name" onChange={e => setFirstName(e.target.value)}/><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="last name" onChange={e => setLastName(e.target.value)}/><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="Identity" onChange={e => setId(e.target.value)}/><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="email" onChange={e => setEmail(e.target.value)}/><br />
				<input type="text" id="login" className="fadeIn second" name="login" placeholder="phone" onChange={e => setPhoneNumber(e.target.value)}/><br />
				{/* <Calendar id="basic" value={birthDate} onChange={(e) => setBirthDate(e.value)} /> */}
				<input type="date" id="login" className="fadeIn second" name="login" placeholder="birthdate" onChange={e => setBirthDate(e.target.value)}/><br />
				<input type="password" id="password" className="fadeIn third" name="login" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
				<br />
				<input type="submit" className="fadeIn fourth" value="register" onClick={signUp}/>

			{/* </form> */}
		</div>
	</div>
  );
}
                 