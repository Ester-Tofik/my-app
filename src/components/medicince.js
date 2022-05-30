import AddIcon from '@mui/icons-material/Add';
import * as React from 'react';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import store from "../store";
import { useEffect, useState } from 'react';
import { getAllMedicinesForUser } from '../api/medicinceAll';
import '../styles/medicine.css'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';
import MedicationLiquidSharpIcon from '@mui/icons-material/MedicationLiquidSharp';
import CalendarMonthSharpIcon from '@mui/icons-material/CalendarMonthSharp';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';


export default function Medicines() {

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

                                                    <ListItemText primary="ימים" secondary="Jan 7, 2014" />
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <CalendarMonthSharpIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </ListItem>
                                                <Divider variant="inset" component="li" />
                                                <ListItem>


                                                    <ListItemText primary="שעות" secondary="July 20, 2014" />
                                                    <ListItemAvatar>
                                                        <Avatar>
                                                            <AccessTimeSharpIcon />
                                                        </Avatar>
                                                    </ListItemAvatar>
                                                </ListItem>
                                            </List>
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


