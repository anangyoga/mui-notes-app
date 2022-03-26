import React from "react";
import { Card, CardHeader, IconButton, CardContent, Typography } from "@mui/material/";
import { DeleteOutlined } from "@mui/icons-material";

export default function NoteCard({ note, handleDelete }) {
  return (
    <Card elevation={3}>
      <CardHeader
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
