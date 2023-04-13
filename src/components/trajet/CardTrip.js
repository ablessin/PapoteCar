import React, {useState, useContext} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Button, Card, CardContent, Grid, IconButton, InputAdornment, TextField} from '@material-ui/core';
import {Place as PlaceIcon, Person as PersonIcon, Search} from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';


function CardTrip() {
    const [formData, setFormData] = useState({
        destination: '',
        departure: '',
        arrival: '',
        departureDate: '',
        passengerCount: 1,
    });

    const history =  useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission behavior
        history(`/trajet?${new URLSearchParams(formData).toString()}`);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    return (
        <Card sx={{ borderRadius: '16px' }} className="root">
            <CardContent>
                <Grid container spacing={1}>
                    <Grid sx={{ margin: 'auto', marginTop: '5%' }} item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                fullWidth
                                label="Recherche votre destination"
                                variant="outlined"
                                name="destination"
                                value={formData.destination}
                                onChange={handleInputChange}
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
                                name="departure"
                                value={formData.departure}
                                onChange={handleInputChange}
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
                                name="arrival"
                                value={formData.arrival}
                                onChange={handleInputChange}
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
                                name="departureDate"
                                value={formData.departureDate}
                                onChange={handleInputChange}
                                className="input"
                                style={{ marginTop: '-78px' }}
                            />
                            <TextField
                                fullWidth
                                label="Nombre de passager"
                                type="text"
                                variant="outlined"
                                name="passengerCount"
                                value={formData.passengerCount}
                                onChange={handleInputChange}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <PersonIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                className="input"
                                style={{ marginTop: '-105px' }}
                            />
                            <Button
                                type="submit"
                                style={{ marginTop: '-330px', backgroundColor: '#022B3A', color: "white" }}
                                variant="contained"
                                color="inherit"
                                fullWidth
                            >
                                Lancer la recherche
                            </Button>
                        </form>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CardTrip;
