import { useMsal } from '@azure/msal-react';
import { Button, Divider, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useRef, useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { LOGIN_URL } from '../api/apiHelper';
import axios from '../api/axios';
import useAuth from '../hooks/useAuth';
import { loginRequest } from '../oauth/msalOAuth';


function SignIn() {
    const { setAuth }: any = useAuth();
    const { instance }: any = useMsal();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const userRef = useRef<any>();
    const errorRef = useRef<any>();

    const [user, setUser] = useState('');
    const [passwd, setPasswd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, passwd]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, passwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
            console.log(response);
        } catch (err: any) {
            if (!err?.response)
                setErrMsg("No server response");
            else if (err.response?.status === 400)
                setErrMsg("Missing username or password");
            else if (err.response?.status === 401)
                setErrMsg("Unauthorized");
            else
                setErrMsg("Login failed");
            errorRef.current.focus();
        }
        setUser('');
        setPasswd('');
        setAuth({ user, passwd });
        navigate(from, { replace: true })
    }

    const handleOAuthSubmit = async (e: any) => {
        instance.loginRedirect(loginRequest);
    }

    return (
        <Box sx={{ mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', py: "15px", width: '30%', my: '10%', backgroundColor: "aliceblue", borderRadius: '1em' }}>
            <Typography variant='h5'>Sign in</Typography>
            <TextField className='inputBox' id='outlined-basic-uname' ref={userRef} label='Username' size='small' onChange={(e) => setUser(e.target.value)} required value={user} variant="outlined" sx={{ width: '40%', my: '0.95rem' }}></TextField>
            <TextField id='outlined-basic-pwd' type='password' label='Password' value={passwd} onChange={(e) => setPasswd(e.target.value)} size='small' variant="outlined" required sx={{ width: '40%' }}></TextField>
            <Typography variant="subtitle2" ref={errorRef} className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</Typography>
            <Button onClick={handleSubmit} variant='contained' sx={{ width: '40%', mt: '1em', textTransform: 'none' }}>Sign in</Button>
            <Stack direction='row' sx={{ width: '40%' }}>
                <Divider sx={{ width: '40%', my: '1em', mx: '0.25em' }} />
                <Typography variant="body2" sx={{ my: '0.25em' }}>Or</Typography>
                <Divider sx={{ width: '45%', my: '1em', mx: '0.25em' }} />
            </Stack>
            <Button onClick={handleOAuthSubmit} variant='contained' sx={{ width: '40%', my: '0.25em', textTransform: 'none' }}>Sign in with Microsoft</Button>
        </Box>
    )
}

export default SignIn