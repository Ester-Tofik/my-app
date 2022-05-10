import AccountMenu from './menu';
import * as React from 'react';
import Button from '@mui/material/Button';
import MedicationIcon from '@mui/icons-material/Medication';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import InfoIcon from '@mui/icons-material/Info';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import AssessmentIcon from '@mui/icons-material/Assessment';
import '../styles/homePage.css';
import { useHistory } from "react-router-dom";

export default function HomePage() {

    const history = useHistory();
    
    const navigateToMedicince = () => {
        history.push('/medicince');
    }
    const navigateToIndices = () => {
        history.push('/indices');
    }
    const navigateToInformation = () => {
        history.push('/information');
    }
    const navigateToDrinkingWater = () => {
        history.push('/drinkingWater');
    }
    const navigateToAskADoctor = () => {
        history.push('/askADoctor');
    }

    return (
        <div>
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                    </div>
                    <AccountMenu />
                    <Button variant="contained" endIcon={<MedicationIcon />} id="Button" onClick={navigateToMedicince}> תרופות</Button><br /><br />
                    <Button variant="contained" endIcon={<AssessmentIcon />} id="Button" onClick={navigateToIndices}> מדדים</Button><br /><br />
                    <Button variant="contained" endIcon={<InfoIcon />} id="Button" onClick={navigateToInformation}> מידע</Button><br /><br />
                    <Button variant="contained" endIcon={<LocalDrinkIcon />} id="Button" onClick={navigateToDrinkingWater}> שתית מים</Button><br /><br />
                    <Button variant="contained" endIcon={<HelpCenterIcon />} id="Button" onClick={navigateToAskADoctor}> שאלה לרופא</Button><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    )
}