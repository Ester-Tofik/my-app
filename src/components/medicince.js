import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import store from "../store";
import { useEffect, useState } from 'react';
import getAllMedicinesForUser from '../api/medicinceAll';

export default function Medicines() {

    const history = useHistory();
    const [_id, set_Id] = React.useState(store.getState().user._id);
    const [listMedicinceForUser, setListMedicinceForUser] = React.useState([]);

   
    const getMedicines = async () => {
        const listMedicinceForUser = await getAllMedicinesForUser(_id);
        setListMedicinceForUser(listMedicinceForUser);
    }
    const navigateTomedicationDetails = () => {
        history.push('/medicationDetails');
    }

    useEffect(async () => {
       await getMedicines();
    }, []);

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    Medicines works!
                    <div id="allMedicince">
                        {
                            listMedicinceForUser.map(el =>
                                <div>
                                    <button>{el._id}</button>
                                </div>)
                        }
                    </div>
                    <br />
                    <Button variant="contained" endIcon={<AddIcon />} onClick={navigateTomedicationDetails}>
                        הוספת תרופה
                    </Button>
                </div>
            </div>
        </div>
    )
}