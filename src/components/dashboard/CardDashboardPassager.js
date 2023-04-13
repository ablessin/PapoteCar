import {Box, Card, CardContent, Divider} from "@mui/material";
import Typography from "@mui/material/Typography";
import {
    Rating,
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator
} from "@mui/lab";
import Avatar from "@mui/material/Avatar";
import {AccessTime as AccessTimeIcon, AccountCircle as AccountCircleIcon} from "@mui/icons-material";
import React, {useState} from 'react';


export default function CardDashboardPassager() {
    const [valueR, setValueR] = React.useState(0);


    return (
        <Card>
            <CardContent>
                <Box display="flex" justifyContent="space-between">
                    <Typography component="legend">Laisser un avis</Typography>
                    <Rating
                        name="simple-controlled"
                        value={valueR}
                        onChange={(event, newValue) => {
                            setValueR(newValue);
                        }}
                    />                                <Avatar>
                    <AccountCircleIcon />
                </Avatar>
                </Box>
                <Typography variant="subtitle1" color="textSecondary">
                    Pierre
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box display="flex" alignItems="center" mb={1}>
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    <Typography variant="body2" color="textSecondary">
                        Dim. 25 Mars
                    </Typography>
                    <Typography variant="body2" color="textSecondary" sx={{ ml: 1, mr: 1 }}>
                        |
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        15h
                    </Typography>
                </Box>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot>
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body2" color="textSecondary">
                                En cours
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </CardContent>
        </Card>
    );
}