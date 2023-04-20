import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ChatList from "../components/chat/ChatList";
import ChatMessage from "../components/chat/ChatMessage";
import ChatInfo from "../components/chat/ChatInfo";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "600px",
}));

export default function BasicGrid() {
  const [currentChatId, setCurrentChatId] = React.useState();
  const [currentUserId, setCurrentUserId] = React.useState();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid item xs={3}>
          <Item>
            <ChatList
              setCurrentChatId={setCurrentChatId}
              setCurrentUserId={setCurrentUserId}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              flexDirection: "column",
            }}
          >
            <ChatMessage
              currentChatId={currentChatId}
              currentUserId={currentUserId}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <ChatInfo />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
