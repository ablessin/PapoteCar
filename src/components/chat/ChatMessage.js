import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ChatMessage({ message, isSender }) {
  return (
    <Box
      sx={{
        display: "flex",
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
    </Box>
  );
}
