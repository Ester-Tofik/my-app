import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useState } from 'react';
import '../styles/ReminderManagement.css';
import Checkbox from '@mui/material/Checkbox';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AccountMenu from '../components/menu'

export default function ReminderManagement() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [snooze, setSnooze] = React.useState('');
    const [soundvoice, setSoundvoice] = React.useState('');
    const [reminder, setReminder] = React.useState('');
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
    });

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

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <AccountMenu/>
                <FormControlLabel
                    control={
                        <Switch id='lime' checked={state.checkedB} onChange={handleChange('checkedB')} value="checkedB" color='red' />
                    }
                    label="הפעלת תזכורות" /> <br />
                <div>
                    הפעל נדנוד אוטומטי
                    <Checkbox {...label} icon={<NotificationsActiveOutlinedIcon />} checkedIcon={<NotificationsActiveIcon />} />

                    <p><div id="Snooze">הפעל נודניק כל </div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small"> דקות</InputLabel>
                            <Select labelId="demo-select-small" id="demo-select-small" value={snooze} label="Age" onChange={handleChangeSnooze}>
                                <MenuItem value="">
                                    <em>בחר דקות</em>
                                </MenuItem>
                                <MenuItem value={10}>5</MenuItem>
                                <MenuItem value={20}>10</MenuItem>
                                <MenuItem value={30}>15</MenuItem>
                                <MenuItem value={30}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </Select>
                        </FormControl>
                    </p>
                    <div>:בחר צליל לתזכורות שלך</div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small"> צליל</InputLabel>
                        <Select labelId="demo-select-small" id="demo-select-small" value={soundvoice} label="Age" onChange={handleChangeSoundvoice}>
                            <MenuItem value="">
                                <em>בחר צליל</em>
                            </MenuItem>
                            <MenuItem value={10}>
                                <audio controls>
                                    <source src="../audio/1.mp3" type="audio/mpeg"></source>
                                </audio></MenuItem>
                            <MenuItem value={20}>
                                <audio controls>
                                    <source src="../audio/2.mp3" type="audio/mpeg"></source>
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
                            <MenuItem value={10}>5</MenuItem>
                            <MenuItem value={20}>10</MenuItem>
                            <MenuItem value={30}>15</MenuItem>
                            <MenuItem value={30}>20</MenuItem>
                            <MenuItem value={30}>30</MenuItem>
                        </Select>
                    </FormControl>
                    <div>לפני זמן המשימה </div><br/><br/><br/>
                    <input type="submit" className="fadeIn fourth" value="save" />
                </div>
            </div>
        </div>
    );
}

