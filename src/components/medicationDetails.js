import * as React from 'react';
import Search from './search'
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Hours from './hours';
import '../styles/medicationDetails.css';

export default function MedicationDetails() {
    const [age, setAge] = React.useState('');
    const [amounts, setAmounts] = React.useState(' ');
    const [show, setShow] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <br />
                    :הוספת תרופה
                    <br /><br />
                    {/* <div id="s"> */}
                    <Search className="center" />

                    <p>:בחר יום</p>
                    <Checkbox  {...label} defaultChecked />א
                    <Checkbox  {...label} defaultChecked />ב
                    <Checkbox  {...label} defaultChecked />ג
                    <Checkbox  {...label} defaultChecked />ד
                    <Checkbox  {...label} defaultChecked />ה
                    <Checkbox  {...label} defaultChecked />ו
                    <br /><br /><br />
                    {/* </div> */}
                    <TextField id="outlined-number" label="Number" type="number" onChange={e => setAmounts(Number(e.target.value), setShow(true))}
                        InputProps={{ inputProps: { min: '0', max: '10', step: '1' } }} />
                    : מס' פעמים ביום<br />
                    <br /><br />
                    {show && (<Hours amount={amounts} />)}
                    <br /><br />
                    <Button id='buttonMui' variant='contained'  >Save</Button>
                </div>
            </div>
        </div>
    );
}




