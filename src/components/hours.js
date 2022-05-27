import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

export default function Hours({ amount }) {

    const [times, setTimes] = useState([]);

    const timesChanges = (e) => {
        debugger
      const  arr = [...times, e];
        setTimes(arr);
        console.log(arr);
    }

    return (
        <>
            {[...Array(amount)].map((el, i) => (
                <div>
                    <TextField
                        id="time"
                        label="בחר שעה"
                        type="time"
                        defaultValue="07:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                        onChange={(e)=>timesChanges(e.target.value)}
                    />
                    <br /><br />
                </div>
            ))}
        </>
    )
}
