import React, {useEffect, useState} from "react";
import {Box, Button, Chip, Container, Grid, InputAdornment, Snackbar, TextField} from "@mui/material";
import Map from "../components/trajetDetail/Map";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Alert} from "@mui/lab";

const StepperForm = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [depart, setDepart] = useState('');
    const [arrive, setArrive] = useState('');
    const [departMap, setDepartMap] = useState('');
    const [arriveMap, setArriveMap] = useState('');
    const [cities, setCities] = useState([]);
    const [cityInput, setCityInput] = useState('');
    const [etapeVilles, setEtapeVilles] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [numberPerson, setnumberPerson] = useState('');

    const handleButtonClick = async () => {
        const isValid = validateForm();
        if (isValid) {
            setShowAlert(true);
            let nomTrajet = "Départ de " + depart.toString() + " le " + selectedDate.toString() + " à " + selectedTime.toString();
            const dataTrajet = {
                name: "test",
                driver: { id: 2 },
                placeMax: 3,
            };
            const GreenGoGigaToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjgxNzUxOTY5LCJleHAiOjE2ODE4MzgzNjl9.w5s7hwJjsA8deFrPuawBDOQUYl1OA0fhdE1-cj1qTazPI9_whX3ml7xCjeh0dny3ivfySpMQWYTNn33uaMJeJA";

            const response = await fetch(
                "http://localhost:8080/api/greenGo/v1/trajet/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjgxNzUxOTY5LCJleHAiOjE2ODE4MzgzNjl9.w5s7hwJjsA8deFrPuawBDOQUYl1OA0fhdE1-cj1qTazPI9_whX3ml7xCjeh0dny3ivfySpMQWYTNn33uaMJeJA',
                    },
                    body: JSON.stringify(dataTrajet),
                }
            );
            console.log(response)
            if (response.ok) {
                setTimeout(() => {
                    window.location.href = "/";
                }, 1000);
            } else {
                //alert("Une erreur s'est produite lors de l'inscription.");
            }
        }
    };
    useEffect(() => {
        let timeoutId;

        if (showAlert) {
            timeoutId = setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [showAlert]);
    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setnumberPerson(event.target.value);
        event.target.value = inputValue.replace(/[^1-6]/g, '');
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
                        ))}<br/><br/>
                        <TextField
                            label="Nombre de personnes (6 max)"
                            type="text"
                            value={numberPerson}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                            inputProps={{ maxLength: 1 }}
                            onChange={handleInputChange}
                        /><br/><br/>
                    </Grid>
                    <Grid item xs={6}>
                        <Map etapes={etapeVilles} depart={departMap} arrive={arriveMap} width="100vh" height="300px"/>
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={handleButtonClick}>
                    Valider
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={showAlert}
                    autoHideDuration={3000}
                    onClose={() => setShowAlert(false)}
                >
                    <Alert severity="success" onClose={() => setShowAlert(false)}>
                        Trajet créé avec succès!
                    </Alert>
                </Snackbar>
                <Box mt={11} mb={11} />
            </form>
        </Container>

    );
};

export default StepperForm;