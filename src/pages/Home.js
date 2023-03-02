import React, {useState} from 'react';
import {
    Box,
} from '@mui/material';
import '../assets/css/views.css';
import Typography from "@mui/material/Typography";
import HeaderLogo from "../components/core/HeaderLogo";
import CardInfo from "../components/CardInfo";
export default function Home() {
    return (
        <>
            <Box>
                <HeaderLogo></HeaderLogo>
                <Box mt={8} mb={2} />
                <CardInfo></CardInfo>
            </Box>
        </>
    );
}