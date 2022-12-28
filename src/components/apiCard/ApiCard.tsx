import { Card, Chip, Stack, Typography } from "@mui/material";
import { useStyles } from "./ApiCard.styles";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

const ApiCard = () => {
  const classes = useStyles({});

  const title =
    "sentiment analysis API gjgklkgkg gmgkglkgjgjg mgkgjgkjgkhjldhfjgdjfdkfkldhjfddffhjkl ngjgk";
  const description =
    " Lorem ipsum dolor sit amet consectetur. Mattis magna in diam donec volutpat turpis. Non orci neque a id varius etiam venenatis. Amet pharetra sollicitudin ligula nunc. Gravida.";

  return (
    <Card className={classes.card} variant="outlined">
      <Typography
        mb={1}
        variant="subtitle1"
        sx={{ fontWeight: "700", fontSize: "18px" }}
        className={classes.apiTitle}>
        {title.length < 60 ? title : title.slice(0, 60) + "..."}
      </Typography>
      <Typography
        mb={1}
        className={classes.apiDescription}
        sx={{ fontSize: "16px" }}>
        {description.length < 150
          ? description
          : description.slice(0, 150) + "..."}
      </Typography>
      <Stack direction="row" spacing={1} className={classes.chipContainer}>
        <Chip
          className={classes.chip}
          icon={<BsPeopleFill className={classes.chipIcon} />}
          label="270"
        />
        <Chip
          className={classes.chip}
          icon={<MdOutlineTimer className={classes.chipIcon} />}
          label="0 ms"
        />
        <Chip
          className={classes.chip}
          icon={<AiOutlineStar className={classes.chipIcon} />}
          label="5/10"
        />
      </Stack>
    </Card>
  );
};

export default ApiCard;
