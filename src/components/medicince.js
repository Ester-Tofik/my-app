import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
 

export default function Medicines() {

    const history = useHistory();

    const navigateTomedicationDetails = () => {
        history.push('/medicationDetails');
    }

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    Medicines works!
                    <br />
                    <Button variant="contained" endIcon={<AddIcon />} onClick={navigateTomedicationDetails}>
                        הוספת תרופה
                    </Button>
                </div>
            </div>
        </div>
    )
}