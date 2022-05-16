import React, { useState } from 'react'
import TextField from '@mui/material/TextField';


const Hours = ({ amount }) => {
    const [amountLessons, setAmountLessons] = useState(false);
    const [lessonShow, setLessonShow] = useState(false);
    return (
        <>
            {[...Array(amount)].map((el, i) => (
                <div>
                    
                </div>
            ))}
        </>
    )
}
export default Hours;
