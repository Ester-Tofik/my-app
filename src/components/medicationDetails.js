import * as React from 'react';
import Search from './search'
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Hours from './hours';
import '../styles/medicationDetails.css';
// import Checkbox from '@mui/material/Checkbox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import saveMedicinesFach from '../api/medicineService'
import medicinesAction from '../action/medicationAction';
import store from '../store';
import AccountMenu from "./menu";

export default function MedicationDetails() {
    const [amounts, setAmounts] = React.useState(' ');
    const [show, setShow] = React.useState(false);
    
    
    // drvfghj
    const [reminderPerPack, setReminderPerPack] = React.useState(false);
    const [reminder, setReminder] = React.useState(true);
    const [searchMedicine, setSearchMedicine] = React.useState(' ');
    const [pillsNumber, setPillsNumber] = React.useState(' ');

     const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleReminder = () => {
        if (reminder) {
            setReminder(false);
        }
        else {
            setReminder(true);
        }
        console.log(reminder)
    }
    React.useEffect(()=>{
        debugger
        console.log(searchMedicine);
    }, [searchMedicine])
    //הטרו והפלס הפוכים
    const handleReminderPerPack = (event) => {
        if (reminderPerPack) {
            setReminderPerPack(false);
        }
        else {
            setReminderPerPack(true);
        }
        console.log(reminderPerPack)
    }
    //////////////////////////////////////////////////////////////// apiId, name, daysInWeek, 
    // numberForDay
    //////////////////////////////////////////////////////////////// ,times, 
    // ammountOfPills,SendAReminderForPacket, pillsInPacket,SendAReminder 
    async function saveMedicines() {
        const medicinesToSave = await saveMedicinesFach(store.getState().user._id, searchMedicine,amounts,reminderPerPack,pillsNumber,reminder);
        store.dispatch(medicinesAction(medicinesToSave));
        console.log(store.getState());
    }


    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <br />

                    <AccountMenu/>
                    <br />
                    :הוספת תרופה
                    <br /><br />
                    <Search className="center" onClick={e => { setSearchMedicine(e.target.value)}} />
                    <p>:בחר יום</p>
                    <Checkbox  {...label} defaultChecked />א
                    <Checkbox  {...label} defaultChecked />ב
                    <Checkbox  {...label} defaultChecked />ג
                    <Checkbox  {...label} defaultChecked />ד
                    <Checkbox  {...label} defaultChecked />ה
                    <Checkbox  {...label} defaultChecked />ו
                    <br /><br /><br />
                    <TextField id="outlined-number" label={amounts} type="number" onChange={e => setAmounts(Number(e.target.value), setShow(true))}
                        InputProps={{ inputProps: { min: '0', max: '5', step: '1' } }} />
                    <span>     :מס' פעמים ביום     </span> <br />
                    <br /><br />
                    {show && (<Hours amount={amounts} />)}

                    <TextField id="outlined-number" label='כדורים' type="number" InputProps={{ inputProps: { min: '0', max: '3', step: '1' } }} />:מס' כדורים ללקיחה
                    <br /> <br />
                    <div >
                        שלח לי תזכורת לחידוש חפיסה
                        <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} onChange={handleReminderPerPack} />
                        {reminderPerPack && (
                            <div>
                                <TextField id="outlined-number" label='כדורים' type="number" InputProps={{ inputProps: { min: '0', max: '100', step: '1' } }} onChange={e=>setPillsNumber(Number(e.target.value))}/>
                                :כרגע יש לי בחפיסה</div>
                        )}<br /><br />
                    </div>
                    :שלח לי תזכורת לנטילת תרופה
                    <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} onChange={handleReminder} />
                    <br /> <br />
                    <Button id='buttonMui' variant='contained' onClick={saveMedicines} >Save</Button>
                </div>
            </div>
        </div>
    );
}







