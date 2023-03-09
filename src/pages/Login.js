import React, {useState} from 'react';
import {
    Box,
} from '@mui/material';
import '../assets/css/views.css';
import LoginForm from "../components/auth/LoginForm";

export default function Login() {
    return (
        <>
            <Box>
                <LoginForm/>
            </Box>
        </>
    );
}
