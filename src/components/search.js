import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import '../styles/medicationDetails.css';
import getMedicinesFromApi from '../api/medicineService';

export default function Search(props) {
  const [medicines, setMedicines] = React.useState([]);
  const [flug, setFlug] = React.useState(false);
  // const [searchMedicine, setSearchMedicine] = React.useState(' ');
  const [value, setValue] = React.useState('');
  const [checkedMedicine, setCheckedMedicine] =  React.useState("");
  useEffect(async () => {
    if (!flug) {
      const data = await getMedicinesFromApi();
      setMedicines(data);
      setFlug(true);
    }

  }, [flug])
  useEffect(() => {
    console.log(`${value}`)
    console.log(`${checkedMedicine}`)
  }, [value, checkedMedicine])

  const onTrigger = (event, newValue) => {
    setValue(newValue);
    medicines.forEach(element => {
      if (element['שם תכשיר'] === newValue) {
        setCheckedMedicine(element);
        props.parentCallback(element);
        event.preventDefault();
      }
    });
  }

  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          onTrigger(event, newValue);
        }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={medicines.map((option) => option['שם תכשיר'])}

        renderInput={(params) => (
          <TextField className='center'
            {...params}
            label="חפש תרופה"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

