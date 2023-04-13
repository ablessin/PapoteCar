import React, {useState} from 'react';
import {
    Box, Tab
} from '@mui/material';
import '../assets/css/views.css';
import {
    TabContext,
    TabList,
    TabPanel,
} from "@mui/lab";
import CardDashboardPassager from "../components/dashboard/CardDashboardPassager";
import CardDashboardConducteur from "../components/dashboard/CardDashboardConducteur";
export default function DashboardTrajet() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box className="cardDashboard" sx={{typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab disabled label="Mes trajets" value="1" />
                        <Tab label="Passager" value="1" />
                        <Tab label="Conducteur" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CardDashboardPassager/>
                </TabPanel>
                <TabPanel value="2">
                    <CardDashboardConducteur/>
                </TabPanel>
            </TabContext>
        </Box>
    );
}