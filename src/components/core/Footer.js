import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Box, Paper} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Logo from "../../assets/img/logoGreenGo.png";
import * as React from "react";
import '../../assets/css/views.css';

function Footer() {
    return (
        <Box
            className="boxFooter"
        >
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                        <IconButton
                            href="/"
                            edge="start"
                            sx={{margin: "auto"}}
                            color="inherit"
                            aria-label="menu"
                        >
                            <Link to="/">
                                <img src={Logo} alt="Logo"/>
                            </Link>
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white", textDecoration: "underline"}} variant="h5">
                            Navigation
                        </Typography>
                        <Box mt={2} mb={2}/>
                        <Typography sx={{color: "white"}} variant="body1">
                            Proposer un trajet
                        </Typography>
                        <Typography sx={{color: "white"}} variant="body1">
                            Rechercher un trajet
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white", textDecoration: "underline"}} variant="h5">
                            Services
                        </Typography>
                        <Box mt={2} mb={2}/>
                        <Typography sx={{color: "white"}} variant="body1">
                            Message
                        </Typography>
                        <Typography sx={{color: "white"}} variant="body1">
                            Tableau de bord
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography sx={{color: "white", textDecoration: "underline"}} variant="h5">
                            Support
                        </Typography>
                        <Box mt={2} mb={2}/>
                        <Typography sx={{color: "white"}} variant="body1">
                            A propos
                        </Typography>
                        <Typography sx={{color: "white"}} variant="body1">
                            Mentions légales
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={2} mb={2}/>
                <hr style={{color: "white"}}/>
                <Grid container spacing={3}>
                    <Grid item xs={12} md="auto">
                        <Typography sx={{color: "white"}} variant="h5">
                            GreenGo
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}/>

                    <Grid item xs={12} md>
                        <Typography sx={{color: "white"}} variant="h5">
                            2023
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer;