import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Paper,
    TablePagination,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell, {tableCellClasses} from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import React, {useState} from "react";
import CardResult from "./CardResult";
import queryString from "query-string";
import {format, parse} from "date-fns";
import frLocale from "date-fns/locale/fr";
import EastIcon from "@mui/icons-material/East";

const columns = [
    {id: "name", label: "Résultats de votre recherche", minWidth: 170},
];

export default function TableListeTrajet(props) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [trajet, setTrajet] = React.useState(null);
    const {destination, departure, arrival, departureDate, passengerCount} =
        props;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const rows = [
        {
            name: "Nom de la ligne 1",
            cardContent: "Contenu de la carte pour la ligne 1",
        },
    ];
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const dateString = "30/03/2023";
    const date = parse(
        departureDate.replace(/-/g, "/"),
        "yyyy/MM/dd",
        new Date()
    );
    const formattedDate = format(date, "eee. dd MMM", {locale: frLocale});
    const GreenGoGigaToken = localStorage.getItem("GreenGoGigaToken");

    React.useEffect(() => {
        async function fetchTrajet() {
            const responseAllTrajet = await fetch(
                "http://localhost:8080/api/greenGo/v1/trajet/read",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${GreenGoGigaToken}`,
                    },
                }
            );
            const TrajetRead = await responseAllTrajet.json();
            console.log(responseAllTrajet)

            setTrajet(TrajetRead);
        }

        fetchTrajet();
    }, []);


        return (
            <>
                <Container fixed>
                    <Typography variant="h5">{formattedDate}</Typography>
                    <Typography variant="h5">
                        Paris <EastIcon/> Nantes
                    </Typography>
                    <Paper sx={{width: "110%", overflow: "hidden", margin: "auto"}}>
                        <TableContainer sx={{maxHeight: 540}}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    backgroundColor: "#329B66",
                                                    color: "white",
                                                }}
                                            >
                                                <Card>{rows.cardContent}</Card>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow
                                                    hover
                                                    role="checkbox"
                                                    tabIndex={-1}
                                                    key={row.code}
                                                >
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === "number"
                                                                    ? column.format(value)
                                                                    : value}

                                                                <CardResult
                                                                    driverName="test"
                                                                    departureCity={departure}
                                                                    arrivalCity={arrival}
                                                                    departureTime="15h00"
                                                                    arrivalTime="18h00"
                                                                    price="15"
                                                                    dateTrip={departureDate}
                                                                />

                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            labelRowsPerPage="Nombre de ligne par page:"
                        />
                    </Paper>
                </Container>
            </>
        );

}
