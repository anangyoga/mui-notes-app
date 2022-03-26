import React from "react";
import { Typography, Button, Container, TextField, Box, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from "@mui/material/";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function Create() {
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");
  const [titleError, setTitleError] = React.useState(false);
  const [detailsError, setDetailsError] = React.useState(false);
  const [category, setCategory] = React.useState("");

  // form control
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details && category) {
      console.log(title, details, category);
    }
  };
  return (
    <Container>
      <Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
        Create a New Note
      </Typography>

      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            marginY: 5,
            display: "block",
          }}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
          helperText="You have to write something"
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          sx={{
            marginY: 5,
            display: "block",
          }}
          label="Details"
          variant="outlined"
          color="secondary"
          // multiline and row to expand the width/height of the box
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
          helperText="You have to write something"
        />

        <FormControl sx={{ marginY: 5, display: "block" }}>
          <FormLabel id="demo-radio-buttons-group-label">Note Category</FormLabel>
          <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
            <FormControlLabel label="Money" value="money" control={<Radio />}></FormControlLabel>
            <FormControlLabel label="Todo" value="todo" control={<Radio />}></FormControlLabel>
            <FormControlLabel label="Reminders" value="reminders" control={<Radio />}></FormControlLabel>
            <FormControlLabel label="Work" value="work" control={<Radio />}></FormControlLabel>
          </RadioGroup>
        </FormControl>

        <Button endIcon={<KeyboardArrowRightIcon />} type="submit" color="secondary" variant="contained">
          Submit
        </Button>
      </Box>
    </Container>
  );
}
