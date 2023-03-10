import React, {useState} from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import '../../assets/css/views.css';
import GoogleLogin from 'react-google-login';

// COMPONENTS POUR LA PARTIE DE CONNEXION DE L'APPLICATION
function LoginForm() {
    const [values, setValues] = useState({
        email: '',
        password: '',
        showPassword: false,
    });
    const handleGoogleLoginSuccess = (response) => {
        // Traitement de la réponse réussie
    };

    const handleGoogleLoginFailure = (response) => {
        // Traitement de la réponse en échec
    };
    const handleInputChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Submitted: ${values.email}, ${values.password}`);
    };
    return (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '85vh'}}>
            <Container maxWidth="sm">
                <Paper sx={{p: 5, height: '45vh'}}>
                    <Typography variant="h4" component="h1" sx={{mb: 2, textAlign: 'center'}}>
                        Connexion
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Grid item xs={12} sx={{width: '100%'}}>
                                <TextField
                                    required
                                    id="email"
                                    label="Adresse e-mail"
                                    type="email"
                                    value={values.email}
                                    onChange={handleInputChange('email')}
                                    sx={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{width: '100%'}}>
                                <FormControl sx={{width: '100%'}}>
                                    <TextField
                                        required
                                        id="password"
                                        label="Mot de passe"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleInputChange('password')}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        title="Afficher le mot de passe"
                                                    >
                                                        {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        sx={{width: '100%'}}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid container justifyContent="center">
                                <Grid item xs={12} sm={6}>
                                    <Box mt={2} mb={2} />
                                    <Button title="Se connecter" className="buttonlogin" type="submit" variant="contained" fullWidth>
                                        Se connecter
                                    </Button>
                                    <Box mt={2} mb={2} />
                                    <hr/>
                                    <Typography textAlign={'center'}>OU</Typography>

                                </Grid>
                            </Grid>
                            <GoogleLogin
                                clientId="VOTRE_CLIENT_ID"
                                buttonText="Se connecter avec Google"
                                onSuccess={handleGoogleLoginSuccess}
                                onFailure={handleGoogleLoginFailure}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
}

export default LoginForm;
