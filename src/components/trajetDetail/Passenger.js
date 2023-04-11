import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

function createData(Avatar, Nom, Prénom) {
  return { Avatar, Nom, Prénom };
}

const rows = [
  createData(
    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,
    "Jean",
    "Valjean"
  ),
  createData(
    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />,
    "Jean",
    "Pierre"
  ),
  createData(
    <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />,
    "Jean",
    "Moulin"
  ),
  createData(
    <Avatar alt="Remy Sharp" src="/static/images/avatar/4.jpg" />,
    "Jean",
    "Balladur"
  ),
  createData(
    <Avatar alt="Remy Sharp" src="/static/images/avatar/5.jpg" />,
    "Jean",
    "slim"
  ),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "#02202B",
  border: "1px",
  boxShadow: 24,
  p: 5,
  color: "#fff",
  borderRadius: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function BasicTable() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box mb={2}>
        <Typography mb={2}>PASSAGER PRÉSENT SUR LE TRAJET</Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Nom</TableCell>
                <TableCell align="center">Prénom</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.Avatar}</TableCell>
                  <TableCell align="center">{row.Prénom}</TableCell>
                  <TableCell align="center">{row.Nom}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained">Envoyer un message</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box>
        <Button onClick={handleOpen} variant="contained" color="success">
          S'inscrire sur le trajet
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h5" mb={5}>
              Voulez vous faire partie de ce trajet ?
            </Typography>
            <Grid container>
              <Grid
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="error">
                  Annuler
                </Button>
              </Grid>
              <Grid
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="success">
                  Valider
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </Box>
    </>
  );
}
