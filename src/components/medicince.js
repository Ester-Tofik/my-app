import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import store from "../store";
import { useEffect, useState } from 'react';
import { getAllMedicinesForUser } from '../api/medicinceAll';
import '../styles/medicine.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MedicationLiquidSharpIcon from '@mui/icons-material/MedicationLiquidSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { deleteOneMedicineDromDB } from '../api/medicinceAll';


export default function Medicines() {

    const Input = styled('input')({
        display: 'none',
    });

    const history = useHistory();
    const [_id, set_Id] = React.useState(store.getState().user._id);
    const [listMedicinceForUser, setListMedicinceForUser] = React.useState([]);


    const getMedicines = async () => {
        debugger
        const listMedicinceForUser = await getAllMedicinesForUser(_id);
        setListMedicinceForUser(listMedicinceForUser);
    }
    const navigateTomedicationDetails = () => {
        history.push('/medicationDetails');
    }
    const daysInWeekToString = (days) => {
        
        let stringDays = ''
        const namesOfDays = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי'];
        for (let index = 0; index < days.length; index++) {
            if (days[index]) {
                stringDays += ` ,${namesOfDays[index]}`
            }
        }
        stringDays = stringDays.substring(2, stringDays.length)
        return stringDays;
    }

    const deleteOneMedicine = async (medicine) => {
        const deleteOneMedicineFetch = await deleteOneMedicineDromDB(_id, medicine._id);
        await getMedicines();
    }

    
   const editMedicine =async (medicine) => {
    debugger 
    history.push('/editMedicine', {  medicine :medicine})
}
    useEffect(async () => {
        await getMedicines();
    }, []);
    return (
        <div className="wrapper fadeInDown" >
            <div id="formContent">
                <div className="fadeIn first">
                    <div className="wrapper fadeInDown" >
                        <Button variant="contained" endIcon={<AddIcon />} onClick={navigateTomedicationDetails}>
                            הוספת תרופה
                        </Button>
                        <div id="allMedicince" >
                            {
                                listMedicinceForUser.map(medicine =>
                                    <div className="wrapper fadeInDown" >
                                        <div id="formContent" >
                                            <List className="ff">
                                                <ListItem>
                                                    <ListItemText primary="תרופה" secondary={medicine.name} />
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <MedicationLiquidSharpIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                                <ListItem>

                                                    <ListItemText primary="ימים" secondary={daysInWeekToString(medicine.daysInWeek)} />
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <CalendarMonthSharpIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                                <ListItem>
                                                    <ListItemText primary="שעות" secondary={medicine.times.map(e => ` ${e}`)} />
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <AccessTimeSharpIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </ListItem>
                                            </List>
                                            <IconButton color="secondary" aria-label="upload picture" component="span" onClick={() => editMedicine(medicine)}>
                                                <EditSharpIcon />
                                            </IconButton>
                                            <IconButton color="secondary" aria-label="upload picture" component="span" >
                                            <DeleteSharpIcon onClick={() => deleteOneMedicine(medicine)} />
                                            </IconButton>
                                            
                                        </div>
                                    </div>
                                )}

                        </div>
                        <br />

                    </div>
                </div>
            </div>
        </div>
    )
}


