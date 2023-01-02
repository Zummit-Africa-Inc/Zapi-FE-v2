import { Card, Chip, Stack, Typography } from "@mui/material";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineTimer } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

import { useStyles } from "./ApiCard.styles";
import { ApiProps } from "../../interfaces";

interface IApiCard {
  api: ApiProps;
}

const ApiCard = ({ api }: IApiCard) => {
  const classes = useStyles({});

  return (
    <Card className={classes.card} variant="outlined">
      <Typography
        mb={1}
        variant="subtitle1"
        sx={{ fontWeight: "700", fontSize: "18px" }}
        className={classes.apiTitle}>
        {api.name.length < 60 ? api.name : api.name.slice(0, 60) + "..."}
      </Typography>
      <Typography
        mb={1}
        className={classes.apiDescription}
        sx={{ fontSize: "16px" }}>
        {api.description.length < 150
          ? api.description
          : api.description.slice(0, 150) + "..."}
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
