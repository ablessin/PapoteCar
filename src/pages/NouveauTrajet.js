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
            let stringDateDepart = selectedDate + "T" + selectedTime;
            const dateTime = new Date(stringDateDepart);
            const year = dateTime.getFullYear();
            const month = String(dateTime.getMonth() + 1).padStart(2, "0");
            const date = String(dateTime.getDate()).padStart(2, "0");
            const hours = String(dateTime.getHours()).padStart(2, "0");
            const minutes = String(dateTime.getMinutes()).padStart(2, "0");
            const seconds = String(dateTime.getSeconds()).padStart(2, "0");
            const formattedDateTime = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}`;

            const dataTrajet = {
                name: nomTrajet,
                driver: {"id" : 15},
                placeMax: numberPerson,
                endPrevisionalDateTime: formattedDateTime,
                startDateTime: formattedDateTime
            };
            const dataPlacedepart = {
                city: depart,
                adress: depart,
                departement : depart,
                region : depart,
            };
            const dataPlaceArrive = {
                city: arrive,
                adress: arrive,
                departement : arrive,
                region : arrive,
            };
            const GreenGoGigaToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0IiwiaWF0IjoxNjgxODM4NzY2LCJleHAiOjE2ODE5MjUxNjZ9.H-qCSroi2YrAn7S5XrVDI9TEkE2ZIuCKPcNmWQ5C6HXRj74sl_0jCo4n7pvyGETgijVo7FWx9Web_ekuYi2jjg";

            const response = await fetch(
                "http://localhost:8080/api/greenGo/v1/trajet/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                    body: JSON.stringify(dataTrajet),
                }
            );

            const responsePlaceCreateDepart = await fetch(
                "http://localhost:8080/api/greenGo/v1/place/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                    body: JSON.stringify(dataPlacedepart),
                }
            );
            const responsePlaceCreateArrive = await fetch(
                "http://localhost:8080/api/greenGo/v1/place/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                    body: JSON.stringify(dataPlaceArrive),
                }
            );

            const idPlaceDepart = await responsePlaceCreateDepart.json();
            const idPlaceArrive = await responsePlaceCreateArrive.json();
            const idTrajet = await response.json();
            console.log(idTrajet + idPlaceArrive + idPlaceDepart)

            const dataStepDepart = {
                place: { "id": idPlaceDepart.id },
                trajet: { "id": idTrajet.id },
                position: 1
            };
            const dataStepArrive = {
                place: { "id": idPlaceArrive.id },
                trajet: { "id": idTrajet.id },
                position: 2
            };
            const responseStepDepart = await fetch(
                "http://localhost:8080/api/greenGo/v1/step/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                    body: JSON.stringify(dataStepDepart),
                }
            );
            const responseStepArrive = await fetch(
                "http://localhost:8080/api/greenGo/v1/step/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                    body: JSON.stringify(dataStepArrive),
                }
            );


             if (response.ok) {
                setTimeout(() => {
                  // window.location.href = "/";
                }, 1000);
            } else {
                alert("Une erreur s'est produite lors de l'inscription.");
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
        if (!selectedDate || !selectedTime || !depart || !arrive || !numberPerson) {
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
