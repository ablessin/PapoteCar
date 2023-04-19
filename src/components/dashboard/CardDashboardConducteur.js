import {Box, Card, CardActionArea, CardContent, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import '../../assets/css/views.css';

import Avatar from "@mui/material/Avatar";
import {AccessTime as AccessTimeIcon, AccountCircle as AccountCircleIcon} from "@mui/icons-material";
import React, {useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import BoyIcon from '@mui/icons-material/Boy';
import Link from "@mui/material/Link";
import {Link as RouterLink} from 'react-router-dom'

export default function CardDashboardConducteur({trajet}) {

    return (
        <>
            {Array.isArray(trajet) && trajet.map((trajet, index) => (
                <Link underline='none' component={RouterLink} to='/'>
                    <Card className="card-hover">
                        <CardActionArea>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs>
                                        <Box display="flex" alignItems="center" mb={1}>
                                            <Typography variant="body2" color="textSecondary">
                                                {trajet.name}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" sx={{ml: 1, mr: 1}}>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary">
                                                {trajet.startDateTime.substring(trajet.startDateTime.length - 8).slice(0, -3)}
                                            </Typography>
                                            <Divider></Divider>
                                        </Box>
                                        <Typography variant="body2"><BoyIcon/> {trajet.passagers.length}  passagers</Typography>
                                    </Grid>
                                    <Divider orientation="vertical" flexItem>
                                        <AccessTimeIcon sx={{mr: 1}}/>
                                    </Divider>
                                    <Grid item xs>
                                        <Typography>Paris <KeyboardDoubleArrowRightIcon/> Nantes</Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            ))}
        </>
    );
}