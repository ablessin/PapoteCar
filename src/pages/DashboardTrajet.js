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
    const [value, setValue] = React.useState("1");
    const [trajet, setTrajet] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    React.useEffect(() => {
        async function fetchTrajet() {
            const GreenGoGigaToken = localStorage.getItem("GreenGoGigaToken");
            const GreenGoGigaUserName = localStorage.getItem("GreenGoGigaUsername");

            const responseGetIdUser = await fetch(
                "http://localhost:8080/api/greenGo/v1/user/read/username/" +
                GreenGoGigaUserName,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                }
            );
            const idUser = await responseGetIdUser.json();

            const responseGetTrajet = await fetch(
                "http://localhost:8080/api/greenGo/v1/trajet/read/user/" + idUser.id,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                }
            );
            const Trajet = await responseGetTrajet.json();
            setTrajet(Trajet);

        }
        fetchTrajet();
    }, []);

    return (
        <Box className="cardDashboard" sx={{ typography: "body1" }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="lab API tabs example"
                    >
                        <Tab disabled label="Mes trajets" value="1" />
                        <Tab label="Passager" value="1" />
                        <Tab label="Conducteur" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CardDashboardPassager trajet={trajet} />
                </TabPanel>
                <TabPanel value="2">
                    <CardDashboardConducteur trajet={trajet} />
                </TabPanel>
            </TabContext>
        </Box>
    );
}
