import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { blue, purple, pink } from "@material-ui/core/colors";

import { Link } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category === "other") {
        return "1px solid red";
      }
    },
    color: (note) => {
      if (note.firstName === "mahmoud") {
        return "blue";
      }
    },
  },
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "male") {
        return blue[500];
      }
      if (note.category === "female") {
        return purple[500];
      }
      if (note.category === "other") {
        return pink[500];
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {  
  const classes = useStyles(note);

  const {t} = useTranslation();

  return (
    <>
      <Grid>
        <Card elevation={3} className={classes.test} key={note.id}>
          <CardHeader
            avatar={
              <Avatar className={classes.avatar} variant="rounded">
                {note.category[0].toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton onClick={() => handleDelete(note.id)}>
                <DeleteOutlineIcon />
              </IconButton>
            }
            title={note.firstName + " " + note.lastName}
            subheader={note.category}
          ></CardHeader>
          <CardMedia
            component="img"
            height="194"
            image="https://picsum.photos/803"
            alt="https://picsum.photos/803"
          ></CardMedia>
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {note.discription}
            </Typography>
          </CardContent>
          <CardActions>
            <Link size="small" to={`/card/${note.firstName}`}>
              {t('View more')}
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
export default withTranslation() (NoteCard);