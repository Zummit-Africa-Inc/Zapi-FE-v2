import React, { useState } from "react";

import {
  Typography,
  Theme,
  Box,
  IconButton,
  TextareaAutosize,
  Stack,
} from "@mui/material";

import AddDiscussionButton from "./discussion/AddDiscussionButton";

const AddDiscussion: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "column",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

          "@media screen and (max-width: 428px)": {
            flexDirection: "column",
          },
        }}>
        <AddDiscussionButton />
      </Box>
    </Box>
  );
};

export default AddDiscussion;
