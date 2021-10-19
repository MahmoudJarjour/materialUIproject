import React, { useEffect, useState } from "react";
import { Container, makeStyles, useTheme } from "@material-ui/core";
import NoteCard from "../Component/NoteCard";
import Masonry from "react-masonry-css";
import SearchBar from "../Component/SearchBar";
import { withTranslation } from "react-i18next";




const Notes = () => {
  const [notes, setNotes] = useState([]);

  // get data from DB.Json
  useEffect(() => {
    fetch("http://localhost:3001/notes")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  // delete card from the json file
  const handleDelete = async (id) => {
    await fetch("http://localhost:3001/notes/" + id, {
      method: "DELETE",
    });

    // delete card from the state and set the new state

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const theme = useTheme();
  

  const breakpoints = {
    default: 3,
    /*1100: 2,
    700: 1,*/
    [theme.breakpoints.values.xl]:3,
    [theme.breakpoints.values.lg]:2,
    [theme.breakpoints.values.md]:2,
    [theme.breakpoints.values.sm]:1,
    [theme.breakpoints.values.xs]:1
  };

  const useStyles = makeStyles((theme) => ({
    root:{
      margin : theme.spacing(3,0,2,0),
    },
    paper:{
      marginButtom: theme.spacing(4),
      
    },
    masonaryGrid:{
      paddingTop: theme.spacing(3),
      display:'flex',
      marginLeft: theme.spacing(0),
      width:'inherit',
      gap: "5px",
      
    },
    masonryColumn:{
      paddingLeft: theme.spacing(4),
      
      backgroundClip: 'padding-box'
    }

  }))
  const classes = useStyles();
  return (
    
    <Container style={useStyles()} spacing={5} md={6} xs={12}>
      <SearchBar spacing={"20px"} />
      <Masonry

        breakpointCols={breakpoints}
        className={classes.masonaryGrid}
        columnClassName={classes.masonaryColumn}
      >
        {notes.map((note) => (
          <div item="true" key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
export default withTranslation() (Notes);

/*

*/
