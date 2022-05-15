import * as React from 'react';
import Search from './search'

import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';



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
                    <br />
                    <Search id="s" />
                    בחר יום
                    <Checkbox  {...label} defaultChecked />א
                    <Checkbox  {...label} defaultChecked />ב
                    <Checkbox  {...label} defaultChecked />ג
                    <Checkbox  {...label} defaultChecked />ד
                    <Checkbox  {...label} defaultChecked />ה
                    <Checkbox  {...label} defaultChecked />ו
                    <Checkbox  {...label} defaultChecked />ז
                    <div>
                        <TextField id="outlined-number" label="Number" type="number" onChange={e=>setAmount(Number(e.target.value))}
                         InputLabelProps={{ inputProps:{min:'0',max:'10',step:'1'} }} />
                         : מס' פעמים ביום
                         <Button variant='contained' startIcon={<AddIcon/>} onClick={()=>setShow(true)}>
                        Add
                         </Button>
                         {show && <Houres amount={amount}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}




