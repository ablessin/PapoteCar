import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import '../../assets/css/views.css';
import CardTrip from "../CardTrip";

// COMPONENT HEADER DU SITE
function HeaderLogo() {

    return (
        <Box className="header">
            <Container>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={10}>
                        <Typography variant="h1">
                            <CardTrip ></CardTrip>
                        </Typography>
                        <Typography sx={{ color: "white"}} variant="h2">Bienvenue sur GreenGo</Typography>
                        <Typography sx={{ color: "white"}} variant="h5">Le moyen le plus économique de faire du co-voiturage</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HeaderLogo;
