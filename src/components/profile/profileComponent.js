import React, { useState, useEffect } from 'react';
import {
    Box,
    Container,
    Paper,
    Typography,
    Stack,
    TextField,
    Grid,
    Divider,
    Button
} from '@mui/material';
import '../../assets/css/views.css';

export default function ProfileComponent() {
    const token = localStorage.getItem("GreenGoGigaToken")
    const [data, setData] = useState(null);

    const username = localStorage.getItem("GreenGoGigaUsername")

    const fetchUser = async () => {
        await fetch(`http://localhost:8080/api/greenGo/v1/user/read/username/${username}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setGenre(data.gender)
                setPseudo(data.username);
                setNom(data.firstName)
                setPrenom(data.surname)
                setEmail(data.email)
            })
            .catch(error => console.error(error));
    };

    const [genre, setGenre] = useState()
    const handleChangeGenre = e => {
        setGenre(e.target.value)
    }
    const [pseudo, setPseudo] = useState()
    const handleChangePseudo = e => {
        setPseudo(e.target.value)
    }
    const [nom, setNom] = useState()
    const handleChangeNom = e => {
        setNom(e.target.value)
    }
    const [prenom, setPrenom] = useState()
    const handleChangePrenom = e => {
        setPrenom(e.target.value)
    }

    const [email, setEmail] = useState()
    const handleChangeEmail = e => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState()
    const handleChangePassword = e => {
        setPassword(e.target.value)
    }

    useEffect(() => {
        fetchUser();
    }, []);

    const handleSubmit = async (e) => {
        const updateData = {
            email: email,
            password: password,
            gender: genre,
            surname: prenom,
            firstName: nom,
            username: username,
            role: "user",
        };

        try {
            const response = await fetch(
                `http://localhost:8080/api/greenGo/v1/user/update/${data.id}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updateData),
                }
            );

            // Vérification de la réponse de l'API
            if (response.ok) {
                // Redirection vers la page de confirmation
                window.location.href = "/profil";
            } else {
                // Affichage d'un message d'erreur
                alert("Une erreur s'est produite lors de la modification du profil.");
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Container maxWidth="sm">
                <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ marginTop: "4em" }}>
                        <Typography variant="h4" component="h1" sx={{ mb: 2, textAlign: 'center' }}>
                            Profile
                        </Typography>
                    </div>

                    <Paper sx={{ p: 5 }}>

                        <form>
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    justifyContent: 'center',
                                    marginTop: '1em',
                                    marginBottom: '4em'
                                }}
                            >
                                <Grid xs={6}>
                                    <Typography variant="h5" component="p" sx={{ mb: 2, marginLeft: '2em' }}>
                                        Genre
                                    </Typography>
                                    <div style={{ alignItems: 'center' }}>

                                        <TextField id="filled-basic" variant="standard" value={genre} onChange={handleChangeGenre} sx={{ marginLeft: '6em', width: '20em' }} />
                                    </div>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography variant="h5" component="p" sx={{ mb: 2, marginLeft: '2em' }}>
                                        Pseudo
                                    </Typography>
                                    <TextField id="standard-basic" required={true} variant="standard" value={pseudo} onChange={handleChangePseudo} sx={{ marginLeft: '6em', width: '20em' }} />
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    justifyContent: 'center',
                                    marginTop: '3em',
                                    marginBottom: '4em'
                                }}
                            >
                                <Grid xs={6}>
                                    <Typography variant="h5" component="p" sx={{ mb: 2, marginLeft: '2em' }}>
                                        Nom
                                    </Typography>
                                    <div style={{ alignItems: 'center' }}>

                                        <TextField id="filled-basic" variant="standard" value={nom} onChange={handleChangeNom} sx={{ marginLeft: '6em', width: '20em' }} />
                                    </div>
                                </Grid>
                                <Grid xs={6}>
                                    <Typography variant="h5" component="p" sx={{ mb: 2, marginLeft: '2em' }}>
                                        Prenom
                                    </Typography>
                                    <TextField id="standard-basic" variant="standard" value={prenom} onChange={handleChangePrenom} sx={{ marginLeft: '6em', width: '20em' }} />
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    justifyContent: 'center',
                                    marginTop: '3em',
                                    marginBottom: '4em'
                                }}
                            >
                                <Grid xs={12}>
                                    <Typography variant="h5" component="p" sx={{ mb: 2, marginLeft: '2em' }}>
                                        Email
                                    </Typography>
                                    <div style={{ alignItems: 'center' }}>

                                        <TextField id="filled-basic" variant="standard" value={email} onChange={handleChangeEmail} sx={{ marginLeft: '6em', width: '52em' }} />
                                    </div>
                                </Grid>
                            </Grid>
                            <Divider />
                            <Grid
                                container
                                spacing={2}
                                sx={{
                                    justifyContent: 'center',
                                    marginTop: '3em',
                                    marginBottom: '4em'
                                }}
                            >
                                <Grid xs={12}>
                                    <Typography variant="h5" component="p" sx={{ mb: 2, marginLeft: '2em' }}>
                                        Mot de passe
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Button style={{ alignItems: 'center' }} onClick={handleSubmit}>Modifier</Button>
                        </form>
                    </Paper>
                </Stack>
            </Container>
        </Box>

    );
}