import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { RadioButton } from 'primereact/radiobutton';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primeicons/primeicons.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";
import "../styles/login.css";
import { Password } from 'primereact/password';
 




export default function LogIn() {

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [radioValue1, setRadioValue1] = useState('');
    const [radioValue2, setRadioValue2] = useState('');
    const [value13, setValue13] = useState('');


    return (
        <div className='login'>
            <div className="card">
                <h2>hellow🙌</h2>
                <div className="grid p-fluid">
                    <div className="col-12 md:col-4">
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="field col-12 md:col-4">
                <span className="p-float-label">
                    <Password inputId="password" value={value13} onChange={(e) => setValue13(e.target.value)} />
                    <label htmlFor="password">Password</label>
                </span>
            </div>

        </div>
    );
}


