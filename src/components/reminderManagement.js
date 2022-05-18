import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useState, useEffect } from 'react';
import '../styles/ReminderManagement.css';
import Checkbox from '@mui/material/Checkbox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountMenu from "./menu";
import a from '../assets/a.mp3';
import saveReminderManageMentFetch from '../api/reminderService';
import { useHistory } from 'react-router-dom';
import store from '../store';
// const alarm = new Audio(soundfile);
import reminderAction from '../action/reminderAction';

export default function ReminderManagement() {

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [snooze, setSnooze] = React.useState('');
    const [soundvoice, setSoundvoice] = React.useState('');
    const [reminder, setReminder] = React.useState('');
    const [ifSnooze, setIfSnooze] = React.useState(false);
    const [state, setState] = useState({
        checkedB: true,
    });
    const history = useHistory();
    useEffect(() => {
        console.log(state);
    }, [state, snooze, ifSnooze])
    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };
    const handleChangeSnooze = (event) => {
        setSnooze(event.target.value);
    };
    const handleChangeSoundvoice = (event) => {
        setSoundvoice(event.target.value);
    };
    const handleChangeReminder = (event) => {
        setReminder(event.target.value);
    };
    const handleChangeIfSnooze = (event) => {
        if (ifSnooze) {
            setIfSnooze(false);
        }
        else {
            setIfSnooze(true);
        }
    }

    async function saveReminderManageMent() {
        const reminderToSave = await saveReminderManageMentFetch(store.getState().user._id, state, ifSnooze, snooze, soundvoice, reminder);
        store.dispatch(reminderAction(reminderToSave));
        console.log(store.getState());
        //history.push('/home');
    }


    return (
        <div className="wrapper fadeInDown">
            {/* </AccountMenu> */}
            {/* <audio controls={true}>
                <source src={a} type="audio/mp3" />
            </audio>
            <button onClick={() => {
                audio1.play()
            }}>Play</button> */}
            <div id="formContent">
                <FormControlLabel
                    control={
                        <Switch id='lime' checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" />
                    }
                    label="הפעלת תזכורות" /> <br />
                {state.checkedB && (
                    <div className='snooze'>
                        הפעל נדנוד אוטומטי
                        <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} onChange={handleChangeIfSnooze} />
                        {ifSnooze && (
                            <div>
                                <div id="Snooze">הפעל נודניק כל </div>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small"> דקות</InputLabel>
                                    <Select labelId="demo-select-small" id="demo-select-small" value={snooze} label="Age" onChange={handleChangeSnooze}>
                                        <MenuItem value="">
                                            <em>בחר דקות</em>
                                        </MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                        <MenuItem value={10}>10</MenuItem>
                                        <MenuItem value={15}>15</MenuItem>
                                        <MenuItem value={20}>20</MenuItem>
                                        <MenuItem value={30}>30</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>)}
                        <div>:בחר צליל לתזכורות שלך</div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small"> צליל</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small" value={soundvoice} label="Age" onChange={handleChangeSoundvoice}>
                                <MenuItem value="">
                                    <em>בחר צליל</em>
                                </MenuItem>
                                <MenuItem value={10}>
                                    <audio controls={true}>
                                        <source src={a} type="audio/mp3" />
                                    </audio>
                                </MenuItem>
                                <MenuItem value={20}>
                                    <audio controls>
                                        <source src={"../audio/2.mp3"} type="audio/mpeg"></source>
                                    </audio>
                                </MenuItem>
                                <MenuItem value={30}>
                                    <audio controls>
                                        <source src="../audio/3.mp3" type="audio/mpeg"></source>
                                    </audio>
                                </MenuItem>
                                <MenuItem value={30}>
                                    <audio controls>
                                        <source src="../aFudio/4.mp3" type="audio/mpeg"></source>
                                    </audio></MenuItem>
                                <MenuItem value={30}>
                                    <audio controls>
                                        <source src="../audio/5.mp3" type="audio/mpeg"></source>
                                    </audio>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <div>:הצג תזכורות </div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small"> דקות</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small" value={reminder} label="Age" onChange={handleChangeReminder}>
                                <MenuItem value="">
                                    <em>בחר דקות</em>
                                </MenuItem>
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                            </Select>
                        </FormControl>
                        <div>לפני זמן המשימה </div><br /><br /><br />
                        <input type="submit" className="fadeIn fourth" value="save" onClick={saveReminderManageMent} />
                        <AccountMenu />
                    </div>)}
            </div>
        </div>
    );
}

