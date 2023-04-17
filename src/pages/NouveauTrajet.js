import React, {useEffect, useState} from "react";
import {
    TextField,
    Grid,
    Button,
    Container,
    InputAdornment,
    Chip,
    Dialog,
    DialogTitle,
    DialogContent, DialogContentText, DialogActions, Slide, Snackbar, Box
} from "@mui/material";
import Map from "../components/trajetDetail/Map";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Alert} from "@mui/lab";

const StepperForm = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [departMap, setDepartMap] = useState('');
    const [arriveMap, setArriveMap] = useState('');
    const [cities, setCities] = useState([]);
    const [cityInput, setCityInput] = useState('');
    const [etapeVilles, setEtapeVilles] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = async () => {
        const isValid = validateForm();
        if (isValid) {
            setShowAlert(true);
            const data = {
                date: selectedDate,
                time: selectedTime,
                depart: depart,
                arrive: arrive,
                cities: cities,
            };

            const response = await fetch(
                "http://localhost:8080/api/greenGo/v1/trajet/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );
            if (response.ok) {
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            } else {
                // Affichage d'un message d'erreur
                alert("Une erreur s'est produite lors de l'inscription.");
            }
        }
    };
    useEffect(() => {
        let timeoutId;

        if (showAlert) {
            timeoutId = setTimeout(() => {
                setShowAlert(false);
            }, 3000); // Temps en millisecondes avant de cacher l'alerte (3 secondes dans cet exemple)
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [showAlert]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    useEffect(() => {
        setDepartMap(depart);
        setArriveMap(arrive);
    }, [depart, arrive]);
    const handleCityInputChange = (event) => {
        setCityInput(event.target.value);
    };
    const validateForm = () => {
        if (!selectedDate || !selectedTime || !depart || !arrive) {
            return false;
        }
        return true;
    };
    const handleCityInputKeyDown = (event) => {
        if (event.key === 'Enter' && cityInput !== '') {
            // Vérifier si la ville est déjà ajoutée
            if (!cities.includes(cityInput)) {
                setCities([...cities, cityInput]);
                setEtapeVilles([...etapeVilles, cityInput]);

            }
            setCityInput('');
        }
    };

    const handleCityChipDelete = (cityToDelete) => {
        setCities(cities.filter((city) => city !== cityToDelete));
        setEtapeVilles(etapeVilles.filter((city) => city !== cityToDelete));
    };

    return (
        <Container>
            <h1>Nouveau Trajet</h1>
            <form onSubmit={handleFormSubmit}>
                <Grid xs={12} container rowSpacing={2} columnSpacing={{xs: 5, sm: 5, md: 8}}>
                    <Grid item xs={5}>
                        <TextField
                            id="date"
                            label="Date de votre départ"
                            type="date"
                            defaultValue=""
                            sx={{width: 220}}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            required

                        />
                        <TextField
                            id="time"
                            label="Heure de départ"
                            type="time"
                            defaultValue=""
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                            sx={{width: 150}}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            required
                        /><br/><br/>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Lieu de départ"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            value={depart}
                            onChange={(e) => setDepart(e.target.value)}
                            onBlur={(e) => setDepart(e.target.value)}
                            required
                        /><br/><br/>
                        <TextField
                            id="input-with-icon-textfield"
                            label="Lieu d'arriver"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocationOnIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                            value={arrive}
                            onChange={(e) => setArrive(e.target.value)}
                            onBlur={(e) => setArrive(e.target.value)}
                            required
                        /><br/><br/>
                        <TextField
                            label="Ajouter des étapes ?"
                            value={cityInput}
                            onChange={handleCityInputChange}
                            onKeyDown={handleCityInputKeyDown}
                        />
                        {cities.map((city) => (
                            <Chip
                                key={city}
                                label={city}
                                onDelete={() => handleCityChipDelete(city)}
                                style={{ margin: '0.5rem' }}
                            />
                        ))}
                    </Grid>
                    <Grid item xs={6}>
                        <Map etapes={etapeVilles} depart={departMap} arrive={arriveMap} width="100vh" height="300px"/>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={handleButtonClick}>
                    Cliquez-moi
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={showAlert}
                    autoHideDuration={3000} // Temps en millisecondes avant de cacher l'alerte
                    onClose={() => setShowAlert(false)}
                >
                    <Alert severity="success" onClose={() => setShowAlert(false)}>
                        This is a success alert — check it out!
                    </Alert>
                </Snackbar>
                <Box mt={11} mb={11} />
            </form>
        </Container>

    );
};

export default StepperForm;
