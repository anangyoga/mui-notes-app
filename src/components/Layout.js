import { Box } from "@mui/system";
import React from "react";

export default function Layout({ children }) {
  return (
    <div>
      <Box
        sx={{
          background: "#B7CADB",
          width: "100%",
        }}
      >
        {children}
      </Box>
    </div>
  );
}
