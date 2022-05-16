import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';


const Hours = ({ amount }) => {

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
                        />
                        <br/><br/>
                </div>
            ))}
        </>
    )
}
export default Hours;
