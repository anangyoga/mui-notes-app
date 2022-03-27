import React from "react";
import { Avatar, Drawer, Box, AppBar, Toolbar, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { AddCircleOutlined, SubjectOutlined } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = 185;

export default function Layout({ children }) {
  const history = useHistory();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div>
      {/* appBar */}
      <AppBar color="secondary" elevation={0} sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Today is the {format(new Date(), "do MMMM Y")}</Typography>
          <Typography>Mario</Typography>
          <Avatar sx={{ marginLeft: 2 }} src="/mario.png" />
        </Toolbar>
      </AppBar>

      {/* permanent drawer */}
      <Drawer sx={{ display: "flex" }} variant="permanent" anchor="left">
        <Typography variant="h5" component="h5">
          Notes
        </Typography>

        {/* list / links */}
        <List>
          {menuItems.map((item) => (
            <ListItem button key={item.text} onClick={() => history.push(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          background: "white",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </div>
  );
}
