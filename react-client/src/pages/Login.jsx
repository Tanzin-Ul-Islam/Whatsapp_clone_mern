import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import "./css/Login.css"
import axios from "axios";
import fetch from '../axios';
import { DataContext } from '../ContextProvider';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const { setToken } = useContext(DataContext);
    const navigate = useNavigate();

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            const userInfo = await axios.get(
                'https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: 'Bearer ' + tokenResponse.access_token } },
            );
            if (userInfo.status === 200) {
                const data = userInfo.data
                const payload = {
                    name: data.name,
                    email: data.email,
                    profilePic: data.picture,
                }
                await fetch.post('/auth/sign-in', payload).then(response => {
                    const data = response.data;
                    localStorage.setItem('token', data.accessToken);
                    localStorage.setItem('userId', data.user._id);
                    localStorage.setItem('email', data.user.email);
                    setToken(data.accessToken);
                    navigate('/');
                })
            }
        },
        onError: errorResponse => console.log(errorResponse),
    });
    return (
        <div className="login">
            <div className="login_container">
                <img src="/image/logo3.png" alt="" />
                <div className="login_text">
                    <h1>Sign Up to WhatsApp</h1>
                </div>
                <Button onClick={() => googleLogin()}>Sign In with Google</Button>
            </div>
        </div>
    )
}
