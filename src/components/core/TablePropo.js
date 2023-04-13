import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Chip, ListItemIcon, MenuList} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import TodayIcon from '@mui/icons-material/Today';
import DateRangeIcon from '@mui/icons-material/DateRange';
import EastIcon from '@mui/icons-material/East';
import Link from "@mui/material/Link";
const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#329B66",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




export default function TablePropo() {

    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700, backgroundColor: "rgba(50,155,102,0.2)"}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell sx={{fontSize: "20px"}}>Catégories</StyledTableCell>
                        <StyledTableCell sx={{fontSize: "20px"}}>Trajets populaires</StyledTableCell>
                        <StyledTableCell sx={{fontSize: "20px"}}>En savoir plus</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell component="th" scope="row">
                            <Paper sx={{ width: 230 }}>
                                <MenuList>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <TodayIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography variant="inherit">Trajet court</Typography>
                                    </MenuItem>
                                    <hr/>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <DateRangeIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography variant="inherit">Trajet long</Typography>
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Chip variant="outlined" deleteIcon={<EastIcon />} onClick={handleClick}
                                  onDelete={handleDelete} color="primary" label="Paris"/>
                            <Chip variant="outlined" color="primary" label="Nantes"/>
                        </StyledTableCell>
                        <StyledTableCell>
                            <Link
                                sx={{fontSize: "18px"}}
                                component="button"
                                variant="body2"
                            >
                                Équipes
                            </Link><br/>
                            <Link
                                sx={{fontSize: "18px"}}
                                component="button"
                                variant="body2"
                            >
                                Chartes
                            </Link>
                        </StyledTableCell>

                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}