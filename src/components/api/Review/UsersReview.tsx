import React, { useEffect, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import { ChatRounded, AccountCircle, Add } from "@mui/icons-material";
import { Typography, Theme, Box, Stack } from "@mui/material";
import { ReviewType } from "../../../types";
import { useAppContext } from "../../../contexts/AppProvider";

interface Props {
  reviews: Array<ReviewType>;
}

const UsersReview: React.FC<Props> = ({ reviews }) => {
  const classes = useStyles();
  const { currentMode } = useAppContext();

  return (
    <Stack direction="column" spacing={1} sx={{ marginTop: "3rem" }}>
      {reviews.length !== 0 ? (
        <>
          {reviews.map((review, index) => (
            <Box className={classes.user_review} key={index}>
              <AccountCircle />

              <Box sx={{ width: "100%" }}>
                <Typography component="p" sx={{ marginBottom: "8px" }}>
                  {/* {review.by.fullName || "User"} */}
                  {"User"}
                </Typography>
                <Typography component="p">
                  {review.review ||
                    "s vitae erat diam arcu molestie mattis vestibulum lorem. Nulla dictum id aenean molestie aliquam volutpat enim tortor. Metus pretium magnis diam sit arcu nisl. Eget at a dolor ultricies et sit ut. Hendrerit viverra tincidunt ut ultricies nec enim aenean. Amet senectus pellentesque gravida iaculis urna diam orci. Fringilla sed auctor elementum mus non volutpat nullam. Purus aliquam sit tincidunt sit eu massa mauris nullam."}
                </Typography>
              </Box>
            </Box>
          ))}
        </>
      ) : (
        <Box
          sx={{
            border: "unset",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "110px 0",
            alignItems: "center",
            width: "100%",
          }}>
          <ChatRounded
            sx={{
              fontSize: "32px",
              color: currentMode === "dark" ? "#FFEA00" : "#264276",
            }}
          />
          <Typography
            sx={{
              fontSize: "18px",
              color: currentMode === "dark" ? "#FFFFFF" : "#060607",
            }}>
            No reviews on the API yet.
          </Typography>
        </Box>
      )}
    </Stack>
  );
};

export default UsersReview;

const useStyles = makeStyles((theme: Theme) => ({
  user_review: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "22px",
    marginBottom: "12px",
    borderBottom: "1px solid #d1d1d1",
    padding: "0 0 25px",
    width: "100%",

    "& img": {
      backgroundColor: theme.palette.grey[100],
      width: "48px",
      height: "48px",
    },

    "& svg": {
      color: theme.palette.grey[100],
      width: "48px",
      height: "48px",
    },

    "& p": {
      fontWeight: "normal",
      fontSize: "16px",
      color: theme.palette.grey[100],
    },
  },
}));
