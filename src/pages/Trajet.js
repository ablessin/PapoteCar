
import React, {useState} from 'react';
import {Box} from "@mui/material";
import HeaderLogo from "../components/core/HeaderLogo";
import TableListeTrajet from "../components/trajet/TableListeTrajet";
import { useLocation } from 'react-router-dom';

export default function Trajet() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const destination = params.get('destination');
    const depart = params.get('departure');
    const arrival = params.get('arrival');
    const departureDate = params.get('departureDate');
    const passengerCount = params.get('passengerCount');
    return (
        <>
            <Box>
                <HeaderLogo></HeaderLogo>
                <Box mt={8} mb={2} />
                <TableListeTrajet destination={destination} departure={depart} arrival={arrival} departureDate={departureDate} passengerCount={passengerCount} />
            </Box>
        </>
    )
}
