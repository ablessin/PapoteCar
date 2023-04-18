import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export default function ChatMessage({ message, isSender }) {
  const [inputText, setInputText] = React.useState("");

  const handleCreateMessage = () => {
    const GreenGoGigaToken = localStorage.getItem("GreenGoGigaToken");

    // Make a POST request to add the input text to the database
    fetch("http://localhost:8080/api/greenGo/v1/message/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GreenGoGigaToken}`,
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Clear the input field
        setInputText("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: isSender ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              backgroundColor: isSender ? "#dcf8c6" : "#fff",
            }}
          >
            <Typography variant="body1">{message}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <TextField
          id="outlined-basic"
          label="Écrire un message"
          variant="outlined"
          sx={{
            width: "60%",
            marginRight: "1rem",
            backgroundColor: "#329B66",
            color: "#fff",
          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <SendIcon
          sx={{
            height: "auto",
            width: "40px",
            color: "#329B66",
            cursor: "pointer",
          }}
          onClick={handleCreateMessage}
        />
      </Box>
    </Box>
  );
}
