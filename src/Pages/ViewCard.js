import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import useStyles from "./Styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


const ViewCard = ({ note, handleDelete}) => {
  const { firstName } = useParams();
  const classes = useStyles();
  const [notes, setNotes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <>
      <section className="fullview">
        <div>
          {notes
            .filter((note) => note.firstName === firstName)
            .map((card, index) => (
              <>
                {console.log(firstName)}
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar className={classes.avatar} variant="rounded">
                        {card.category[0].toUpperCase()}
                      </Avatar>
                    }
                    title={card.firstName + " " + card.lastName}
                    subheader={card.category}
                  ></CardHeader>
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://picsum.photos/803"
                    alt="https://picsum.photos/803"
                  ></CardMedia>
                  <CardContent>
                    <Typography variant="body2" color="textSecondary">
                      {card.discription}
                    </Typography>
                  </CardContent>
                </Card>

                <Button
                  endIcon={<ArrowBackIcon color="primary" />}
                  variant="outlined"
                  color="primary"
                  onClick={() => history.goBack()}
                >
                  Back{" "}
                </Button>
              </>
            ))}
        </div>
      </section>
    </>
  );
}
export default ViewCard;