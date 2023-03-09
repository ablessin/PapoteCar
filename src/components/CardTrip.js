import React from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Search, CalendarToday } from '@mui/icons-material';
import '../assets/css/views.css';
import PlaceIcon from '@mui/icons-material/Place';
import PersonIcon from '@mui/icons-material/Person';

// COMPONENTS POUR LE MODULE DE RECHERCHE DE TRAJET *PAGES HOME
function CardTrip() {
    return (
        <Card sx={{ borderRadius: '16px' }} className="root">
            <CardContent>
                <Grid container spacing={1}>
                    <Grid sx={{margin: 'auto', marginTop: '5%'}} item xs={10} >
                        <TextField
                            fullWidth
                            label="Recherche votre destination"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            className="input"
                            style={{ marginTop: '-3px' }}
                        />
                        <TextField
                            fullWidth
                            label="Ville de départ"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <PlaceIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            className="input"
                            style={{ marginTop: '-28px' }}
                        />
                        <TextField
                            fullWidth
                            label="Ville d'arrivée"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <PlaceIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            className="input"
                            style={{ marginTop: '-52px' }}
                        />
                        <TextField
                            fullWidth
                            label="Date de départ"
                            type="date"
                            variant="outlined"
                            className="input"
                            style={{ marginTop: '-78px' }}
                        />
                        <TextField
                            fullWidth
                            label="Date de retour"
                            type="date"
                            value=""
                            variant="outlined"
                            className="input"
                            style={{ marginTop: '-103px' }}
                        />
                        <TextField
                            fullWidth
                            label="Nombre de passager"
                            type="text"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <PersonIcon/>
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            className="input"
                            style={{ marginTop: '-125px' }}
                        />
                        <Button style={{ marginTop: '-330px', backgroundColor: "#FEE928"}} variant="contained" color="inherit" fullWidth>
                            Lancer la recherche
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CardTrip;
