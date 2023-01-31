import React, { useEffect, useState } from "react";
import { styled, makeStyles } from "@mui/styles";
import { Typography, Theme, Box, Stack, Button } from "@mui/material";
import { ChatRounded, AccountCircle } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

import { ReviewType } from "../../types";
import { useAppContext } from "../../contexts/AppProvider";

interface Props {
  reviews: Array<ReviewType>;
}

const Reviews: React.FC<Props> = ({ reviews }) => {
  const classes = useStyles();
  const { handleClicked } = useAppContext();

  return (
    <Box className={classes.root}>
      {reviews.length == 0 ? (
        <Typography component="h2">Reviews</Typography>
      ) : (
        <></>
      )}
      <Box style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "#fff",
            color: "#264276",
            width: "200px",
            height: "2.5rem",
          }}
          className={classes.newDiscussion}
          onClick={() => handleClicked("addDiscussion")}>
          <Add /> <Typography sx={{ fontSize: "14px" }}>New Review</Typography>
        </Button>
      </Box>
      <Stack direction="column" spacing={1}>
        {reviews.length !== 0 ? (
          <>
            {reviews.map((review, index) => (
              <Box className={classes.user_review}>
                <AccountCircle />

                <Box sx={{ width: "100%" }}>
                  <Typography component="p" sx={{ marginBottom: "8px" }}>
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
            <ChatRounded sx={{ fontSize: "32px", color: "#264276" }} />
            <Typography sx={{ fontSize: "18px", color: "#060607" }}>
              No reviews on the API yet.
            </Typography>
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default Reviews;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
    padding: "0 120px 80px 120px",
    lineHeight: "41px",
    width: "100%",
    "& h2": {
      margin: "63px 0",
      fontWeight: "bold",
      fontSize: "19px",
      color: theme.palette.grey[100],
    },

    "@media screen and (max-width: 900px)": {
      padding: "44px 32px 24px 32px",

      "& h2": {
        fontSize: "23px",
      },
    },

    "@media screen and (max-width: 428px)": {
      padding: "20px 16px 24px 16px",
      fontSize: "14px",
    },
  },
  newDiscussion: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "8px 16px",
    gap: "16px",
    width: "200px",
    lineHeight: "46px",
    // borderColor: "#071B85",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#FFFFFF",
    border: " solid #071B85",
    fontWeight: "500",
    fontSize: "16px",
    "@media screen and (max-width: 1024px)": {
      marginBottom: "1rem",
      width: "385px",
    },
    "@media screen and (max-width: 500px)": {},
  },

  user_review: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "24px",
    marginBottom: "12px",
    borderBottom: "1px solid #d1d1d1",
    padding: "0 0 21px 25px",
    width: "100%",

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
