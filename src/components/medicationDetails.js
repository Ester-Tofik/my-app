import * as React from 'react';
import Search from './search'
import AddIcon from '@mui/icons-material/Add';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Hours from './hours';
import '../styles/medicationDetails.css'

export default function MedicationDetails() {
    const [age, setAge] = React.useState('');
    const [amount, setAmount] = React.useState(' ');
    const [show, setShow] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    :הוספת תרופה
                    <br /><br /><br />
                    {/* <div id="s"> */}
                        <Search >
                            <p>:בחר יום</p>
                            <Checkbox  {...label} defaultChecked />א
                            <Checkbox  {...label} defaultChecked />ב
                            <Checkbox  {...label} defaultChecked />ג
                            <Checkbox  {...label} defaultChecked />ד
                            <Checkbox  {...label} defaultChecked />ה
                            <Checkbox  {...label} defaultChecked />ו
                        </Search >
                        <br/>
                        {/* </div> */}
                        <TextField id="outlined-number" label="Number" type="number" onChange={e => setAmount(Number(e.target.value))}
                            InputLabelProps={{ inputProps: { min: '0', max: '10', step: '1' } }} />
                        : מס' פעמים ביום<br />
                        <Button variant='contained' startIcon={<AddIcon />} onClick={() => setShow(true)}>
                            Add
                        </Button>
                        {show && (<Hours amount={amount} />)}
                    </div>
                </div>
            </div>
    );
}




