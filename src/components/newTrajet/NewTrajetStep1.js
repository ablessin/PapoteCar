import * as React from "react";
import TextField from "@mui/material/TextField";
import {Grid, Typography} from "@mui/material";
import Map from "../trajetDetail/Map";
import {useState} from "react";

export default function NewTrajetStep1(props) {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    return (
        <Typography sx={{mt: 2, mb: 1}}>
            <TextField
                id="date"
                label="Date de votre départ"
                type="date"
                defaultValue=""
                sx={{ width: 220 }}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={(e) => setSelectedDate(e.target.value)}

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
                sx={{ width: 150 }}
                onChange={(e) => setSelectedTime(e.target.value)}
            />
            <Map width="200vh" height="500px" />
        </Typography>
    );
}
