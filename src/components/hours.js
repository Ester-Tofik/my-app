import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
export default function Hours(props) {

    const [times, setTimes] = useState([]);
    useEffect(()=>{
        console.log(props.amount)
    },[])

    const timesChanges = (e, i) => {
        debugger
        let arr = [];
        if (times[i]) {
            arr = times;
            arr[i] = e.target.value;
        
            setTimes(arr);
        }
        else {
            arr = [...times, e.target.value];
        }
        setTimes(arr);
        props.parentCallback(arr);
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
                        defaultValue={props.times[i]}
                        type="time"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        inputProps={{
                            step: 300, // 5 min
                        }}
                        sx={{ width: 150 }}
                        onChange={(e) => timesChanges(e, i)}
                    />
                    <br /><br />
                </div>
            ))}
        </>
    )
}
