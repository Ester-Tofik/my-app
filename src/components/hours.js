import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function Hours(props) {

    const [times, setTimes] = useState([]);

    const timesChanges = (e) => {
        const arr = [...times, e.target.value];
        setTimes(arr);
        props.parentCallback(times);
        e.preventDefault();
        console.log(arr);
    }

    return (
        <>
            {[...Array(props.amount)].map((el, i) => (
                <div>
                    <TextField
                        id="time"
                        label="בחר שעה"
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                        onChange={(e)=>timesChanges(e)}
                    />
                    <br /><br />
                </div>
            ))}
        </>
    )
}
