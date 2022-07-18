import * as React from 'react';
import Search from './search';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import Hours from './hours';
import '../../styles/medicationDetails.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { saveMedicinesFach } from '../../api/medicinceAll'
import medicinesAction from '../../action/medicationAction';
import store from '../../store';
import AccountMenu from "../global/menu";
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { apdateMedicineDetils } from '../../api/medicinceAll';

export default function MedicationDetails() {
    const history = useHistory();
    const [medicine, setMedicine] = React.useState(history.location.state.medicine);
    const [ammountOfPills, setAmmountOfPills] = React.useState(medicine.ammountOfPills);
    const [show, setShow] = React.useState(true);
    const [reminderPerPack, setReminderPerPack] = React.useState(medicine.SendAReminderForPacket);
    const [reminder, setReminder] = React.useState(medicine.SendAReminder);
    const [pillsNumber, setPillsNumber] = React.useState(medicine.pillsInPacket);
    const [checkedMedicine, setCheckedMedicine] = React.useState(medicine.name);
    const days = ['א', 'ב', 'ג', 'ד', 'ה', 'ו'];
    const [checkedDays, setCheckedDays] = React.useState(medicine.daysInWeek);
    const [timesChanges, setTimesChanges] = React.useState(medicine.times);
    const [amountsForDay, setAmountsForDay] = React.useState(medicine.numberForDay);
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

    useEffect(() => {
        console.log(checkedDays)
        console.log(checkedMedicine)
    }, [checkedDays, checkedMedicine])

    useEffect(() => {
        debugger
        console.log(medicine)
        console.log(checkedMedicine)
    }, [])

    useEffect(() => {
        console.log(medicine.daysInWeek)
        console.log(medicine.checkedDays)
        console.log(medicine)
    }, [medicine])
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
    useEffect(() => {
        console.log(amountsForDay);
        console.log(ammountOfPills);
        console.log(medicine.name);
    }, [amountsForDay, ammountOfPills])


    async function editMedicines() {
        const medicinesToSave = await apdateMedicineDetils(store.getState().user._id, medicine._id, medicine.apiId, checkedMedicine, checkedDays, amountsForDay, timesChanges, ammountOfPills, reminderPerPack, pillsNumber, reminder);
        store.dispatch(medicinesAction(medicinesToSave));
        console.log(store.getState());
        history.push('/medicince')
    }
    const handleOnChange = (position) => {
        const updatedCheckedState = checkedDays.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedDays(updatedCheckedState);
    }
    const handleChangeHours = (e) => {
        debugger
        setTimesChanges(e);
    }
    const hoursChanged = (e) => {
        debugger
        setAmountsForDay(Number(e.target.value));
        setShow(true);
        let arr = timesChanges.slice(0, amountsForDay);
        setTimesChanges(arr);
    }
    const arrayMap = days.map((element, index) => {
        return (
            <div>
                <Checkbox  {...label}
                    defaultChecked={checkedDays[index]}
                    onChange={() => handleOnChange(index)} />
                {element}
            </div>
        )
    })

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <br />
                    <AccountMenu />
                    <br />
                    :הוספת תרופה
                    <br /><br />
                    <Search className="center" parentCallback={(childData) => {
                        debugger
                        setCheckedMedicine(childData["שם תכשיר"])
                    }}
                        value={checkedMedicine} />
                    <p>:בחר יום</p>
                    {arrayMap}
                    <br /><br /><br />
                    <TextField id="outlined-number" label={amountsForDay} defaultValue={amountsForDay} type="number" onChange={(e) => { hoursChanged(e) }}
                        InputProps={{ inputProps: { min: '0', max: '5', step: '1' } }} />
                    <span>     :מס' פעמים ביום     </span> <br />
                    <br /><br />

                    {/* {show && (<Hours amount={amountsForDay} parentCallback={(e) => { handleChangeHours(e) }} times={timesChanges} />)}
                    <TextField id="outlined-number" defaultValue={amountsForDay} label='כדורים' type="number" onChange={e => setAmountsForDay(Number(e.target.value))} InputProps={{ inputProps: { min: '0', max: '3', step: '1' } }} />:מס' כדורים ללקיחה */}
                    {show && (<Hours amount={amountsForDay} parentCallback={(e) => { handleChangeHours(e) }} times={timesChanges} />)}

                    <TextField id="outlined-number" label={ammountOfPills} type="number" defaultValue={ammountOfPills} onChange={e => setAmmountOfPills(Number(e.target.value))} InputProps={{ inputProps: { min: '0', max: '3', step: '1' } }} />:מס' כדורים ללקיחה
                    <br /> <br />
                    <div >
                        שלח לי תזכורת לחידוש חפיסה
                        <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} onChange={handleReminderPerPack} checked={reminderPerPack} />
                        {reminderPerPack && (
                            <div>
                                <TextField id="outlined-number" label='כדורים' type="number" InputProps={{ inputProps: { min: '0', max: '100', step: '1' } }} onChange={e => setPillsNumber(Number(e.target.value))} defaultValue={pillsNumber} />
                                :כרגע יש לי בחפיסה</div>
                        )}<br /><br />
                    </div>
                    :שלח לי תזכורת לנטילת תרופה
                    <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} onChange={handleReminder} checked={reminder} />
                    <br /> <br />
                    <Button id='buttonMui' variant='contained' onClick={editMedicines} >עדכון</Button>
                </div>
            </div>
        </div>
    );
}







