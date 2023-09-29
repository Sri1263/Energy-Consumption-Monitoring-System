import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import NavBar from './NavBar';
import LoginIcon from '@mui/icons-material/Login';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


const Login = () => {
    const nav = useNavigate()
    return (
        <div>
            <NavBar/>
            <div className='loginCardHolder'>
                <div className='loginCard'>
                    <div className='LoginButton' >
                        <LoginIcon className='loginIcon'/>
                    </div>
                    <div className='loginFields'>
                        <TextField
                            id="outlined-Username-input"
                            label="Username"
                            type="Username"
                            autoComplete="current-Username"
                        />
                    </div>
                    <div className='loginFields'>
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                    </div>
                    <div className='loginFields'>
                        <Button variant="outlined" size='large' onClick={()=>nav('/dashboard')} >
                            Log Me in    
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
