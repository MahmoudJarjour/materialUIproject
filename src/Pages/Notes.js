import React, { useEffect, useState } from 'react'
import {Container, Grid, Paper} from '@material-ui/core'

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <Container>

      
        <Grid container>
        {notes.map(note => (
           <Grid item key={note.id} xs={12} sm={6} md={4}>

             <Paper variant='outlined'>{note.firstName}</Paper>
             <Paper variant='outlined'>{note.lastName}</Paper>
             <Paper variant='outlined'>{note.discription}</Paper>
             <Paper variant='outlined'>{note.category }</Paper>
            
            </Grid>
        ))}
        </Grid>
      
    </Container>
  )
}

/*

*/