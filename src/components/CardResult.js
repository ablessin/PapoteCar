import React, {useState} from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, Snackbar,
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import './../assets/css/views.css';
import Logo from "./../assets/img/logoGreenGo.png";
import {
    Alert,
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import {Button} from "@material-ui/core";

function CardResult(props) {
    const { driverName, driverPhoto, departureCity, arrivalCity, departureTime, arrivalTime, price, dateTrip } = props;
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <Card className="rootCard">
            <CardMedia className="media" image={Logo} title={driverName} />
            <CardContent className="content">
                <Typography variant="h6">{driverName}</Typography>
            </CardContent>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{departureCity} - {departureTime}</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>{arrivalCity} - {arrivalTime}</TimelineContent>
                </TimelineItem>
            </Timeline>
            <div>
                <Button style={{ backgroundColor: '#022B3A', color: 'white' }} variant="outlined" onClick={handleClickOpen}>
                    Réserver
                </Button>
            </div>
            <Typography sx={{marginRight: 10}} variant="h5" color="primary">{price} €</Typography>
        </Card>
    );
}

export default CardResult;