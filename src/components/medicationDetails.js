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
import { useEffect } from 'react';
import { daysToWeeks } from 'date-fns/fp';

export default function MedicationDetails() {
    const [amounts, setAmounts] = React.useState(' ');
    const [show, setShow] = React.useState(false);
    const [reminderPerPack, setReminderPerPack] = React.useState(false);
    const [reminder, setReminder] = React.useState(true);
    const [pillsNumber, setPillsNumber] = React.useState(' ');
    const [checkedMedicine, setCheckedMedicine] = React.useState({});
    const days= ['א', 'ב', 'ג', 'ד', 'ה', 'ן'];
    const [checkedDays, setCheckedDays] = React.useState(new Array(days.length).fill(true));
    const [timesChanges, setTimesChanges] = React.useState([]);

    const handleReminder = () => {
        if (reminder) {
            setReminder(false);
        }
        else {
            setReminder(true);
        }
        console.log(reminder)
    }
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const arrayMap = days.map((element, index) => {
        return (
            <div>
                <Checkbox  {...label} defaultChecked
                    onChange={() => handleOnChange(index)} />
                {element}
            </div>
        )
    })
    const handleOnChange = (position) => {
        debugger
        const updatedCheckedState = checkedDays.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedDays(updatedCheckedState);
    }
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
            const medicinesToSave = await saveMedicinesFach(store.getState().user._id, checkedMedicine._id,checkedMedicine['שם תכשיר'],checkedDays,  amounts, reminderPerPack, pillsNumber, reminder);
            store.dispatch(medicinesAction(medicinesToSave));
            console.log(store.getState());
        }

        const handleCallback = (childData) => {
            debugger
            setTimesChanges(childData)
        }

        useEffect(() => {
            console.log(checkedMedicine);
            console.log(checkedDays);
            console.log(timesChanges);
        }, [checkedMedicine, checkedDays,timesChanges])
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <br />

                        <AccountMenu />
                        <br />
                        :הוספת תרופה
                        <br /><br />
                        <Search className="center" parentCallback={childData=>{setCheckedMedicine(childData)}} />
                        <p>:בחר יום</p>
                        {arrayMap}
                        <br /><br /><br />
                        <TextField id="outlined-number" label={amounts} type="number" onChange={e => setAmounts(Number(e.target.value), setShow(true))}
                            InputProps={{ inputProps: { min: '0', max: '5', step: '1' } }} />
                        <span>     :מס' פעמים ביום     </span> <br />
                        <br /><br />
                        {show && (<Hours amount={amounts} parentCallback={e=>{handleCallback(e)}}/>)}

                        <TextField id="outlined-number" label='כדורים' type="number" InputProps={{ inputProps: { min: '0', max: '3', step: '1' } }} />:מס' כדורים ללקיחה
                        <br /> <br />
                        <div >
                            שלח לי תזכורת לחידוש חפיסה
                            <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} onChange={handleReminderPerPack} />
                            {reminderPerPack && (
                                <div>
                                    <TextField id="outlined-number" label='כדורים' type="number" InputProps={{ inputProps: { min: '0', max: '100', step: '1' } }} onChange={e => setPillsNumber(Number(e.target.value))} />
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







