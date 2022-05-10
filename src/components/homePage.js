import AccountMenu from './menu';
import * as React from 'react';
import Button from '@mui/material/Button';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import InfoIcon from '@mui/icons-material/Info';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AssessmentIcon from '@mui/icons-material/Assessment';
import '../styles/homePage.css'
export default function HomePage() {
    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    </div>
                    <AccountMenu />
                        <Button variant="contained" endIcon={<MedicationIcon />}  id="Button"> תרופות</Button><br/><br/>
                        <Button variant="contained" endIcon={<AssessmentIcon />} id="Button"> מדדים</Button><br/><br/>
                        <Button variant="contained" endIcon={<InfoIcon />} id="Button"> מידע</Button><br/><br/>
                        <Button variant="contained" endIcon={<LocalDrinkIcon />} id="Button"> שתית מים</Button><br/><br/>
                        <Button variant="contained" endIcon={<HelpCenterIcon />} id="Button"> שאלה לרופא</Button><br/><br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>
    )
}