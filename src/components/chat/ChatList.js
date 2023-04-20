import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";

export default function ChatList({ setCurrentChatId, setCurrentUserId }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    const GreenGoGigaToken = localStorage.getItem("GreenGoGigaToken");
    const GreenGoGigaUsername = localStorage.getItem("GreenGoGigaUsername");

    fetch(
      `http://localhost:8080/api/greenGo/v1/user/read/username/${GreenGoGigaUsername}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GreenGoGigaToken}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        fetchChatList(data.id);
        setCurrentUserId(data.id);
      })
      .catch((error) => console.log(error));

    const fetchChatList = async (userID) => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/greenGo/v1/chat/read/user/${userID}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${GreenGoGigaToken}`,
            },
          }
        );
        const data = await response.json();
        setChatList(data);
        console.log("data", data);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={5}>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={3} sx={{ display: "flex", alignSelf: "flex-end" }}>
            <QuestionAnswerIcon />
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", alignSelf: "flex-start" }}>
            <Typography variant="h5"> Discussion </Typography>
          </Grid>
        </Grid>
        {chatList.map((chat) => (
          <Stack
            onClick={() => setCurrentChatId(chat.id)}
            key={chat.id}
            sx={{ cursor: "pointer" }}
          >
            <Grid container sx={{ display: "flex", justifyContent: "center" }}>
              <Grid item xs={3}>
                <AccountCircleIcon />
              </Grid>
              <Grid item xs={9}>
                <Typography variant="h5">Title</Typography>
              </Grid>
              <Typography>Départ</Typography>
              <ArrowForwardIcon />
              <Typography>Arrivé</Typography>
            </Grid>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
