import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import '../styles/medicationDetails.css';
import getMedicinesFromApi from '../api/medicineService';

export default function Search({ }) {
  const [medicines, setMedicines] = React.useState([]);
  const [flug, setFlug] = React.useState(false);

  useEffect(async () => {
    if (!flug) {
      const data = await getMedicinesFromApi();
      setMedicines(data);
      setFlug(true);
    }
  }, [flug])


  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
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

