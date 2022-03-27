import React from "react";
import { Card, CardHeader, IconButton, CardContent, Typography, Avatar } from "@mui/material/";
import { DeleteOutlined } from "@mui/icons-material";
import { blue, green, yellow, pink } from "@mui/material/colors";

export default function NoteCard({ note, handleDelete }) {
  return (
    <Card elevation={3}>
      <CardHeader
        avatar={
          <Avatar
            // this color-mapping doesn't work
            sx={{
              backgroundColor: (note) => {
                if (note.category === "work") {
                  return yellow[700];
                }
                if (note.category === "money") {
                  return green[500];
                }
                if (note.category === "todos") {
                  return pink[500];
                }
                return blue[500];
              },
            }}
          >
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
