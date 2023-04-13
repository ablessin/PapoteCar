import * as React from 'react';
import Grid from '@mui/material/Grid';
import ECOCardInfo from '../../assets/img/ECOCardInfo.png';
import CARDInfo2 from '../../assets/img/CARDInfor2.jpg';
import CARDInfo3 from '../../assets/img/CARDInfo3.jpg';

import {Box, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function CardInfo() {
    const [spacing, setSpacing] = React.useState(2);


    return (
        <Grid container spacing={2} align="center" justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 450 }}>
                    <CardActionArea>
                        <CardMedia
                            sx={{width:"100%"}}
                            component="img"
                            height="260"
                            image= {ECOCardInfo}
                            alt="ECOCardInfo"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Éco-responsable
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                GreenGo est une entreprise de co-voiturage qui est résolument engagée en faveur de l'éco-responsabilité.
                                Consciente de l'impact environnemental des transports individuels, elle propose une alternative durable en permettant
                                à ses utilisateurs de partager leur trajet avec d'autres passagers.
                            </Typography>
                        </CardContent>
                        <Box mt={5} mb={2} />
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 450 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="260"
                            image= {CARDInfo2}
                            alt="CARDInfo2"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fiabilité
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Chez GreenGo, la fiabilité est une valeur primordiale pour assurer la satisfaction de nos utilisateurs. Nous avons mis en place des procédures rigoureuses pour garantir la ponctualité de nos conducteurs et la qualité de notre service de co-voiturage.
                                Nous sélectionnons soigneusement nos conducteurs en vérifiant leur expérience de conduite et leur historique, pour nous assurer de leur fiabilité et de leur sérieux.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 450 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="260"
                            image={CARDInfo3}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Économique
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                GreenGo offre une solution économique pour les déplacements de ses
                                utilisateurs. En partageant les frais de transport avec d'autres passagers, les utilisateurs de GreenGo peuvent bénéficier de tarifs compétitifs pour leurs trajets.
                            </Typography>
                        </CardContent>
                        <Box mt={5} mb={2} />
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}