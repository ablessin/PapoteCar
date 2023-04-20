import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

export default function ChatMessage({ currentChatId, currentUserId }) {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const GreenGoGigaToken = localStorage.getItem("GreenGoGigaToken");

    fetch(
      `http://localhost:8080/api/greenGo/v1/message/read/chat/${currentChatId}`,
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
        setMessages(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [currentChatId]);
  const handleCreateMessage = () => {
    const GreenGoGigaToken = localStorage.getItem("GreenGoGigaToken");
    // Make a POST request to add the input text to the database
    fetch("http://localhost:8080/api/greenGo/v1/message/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GreenGoGigaToken}`,
      },
      body: JSON.stringify({
        user: { id: currentUserId },
        chat: { id: currentChatId },
        description: inputText,
      }),
    })
      .then((data) => {
        console.log("Success:", data);
        setInputText("");
        setMessages([...messages, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box sx={{ flex: "1 1 auto", overflowY: "scroll" }}>
        {messages.map((message) => (
          <Box
            key={message.id}
            sx={{
              display: "flex",
              p: 1,
              borderRadius: 2,
              backgroundColor: message.isSender ? "#dcf8c6" : "#fff",
              maxWidth: "75%",
              mb: 1,
            }}
          >
            <Typography
              sx={{
                border: "solid 1px",
                width: "fitcontent",
                padding: "5px",
                borderRadius: "5px",
              }}
              variant="body1"
            >
              {message.description}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          borderTop: "1px solid #ccc",
          p: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Écrire un message"
          variant="outlined"
          sx={{
            width: "100%",
            backgroundColor: "#f5f5f5",
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
