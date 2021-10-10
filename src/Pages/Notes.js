import React, { useEffect, useState } from 'react'
import {Grid, Paper} from '@material-ui/core'

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>

      
        <Grid container>
        {notes.map(note => (
           <Grid item key={note.id} xs={12} sm={6} md={3} style={{margin:'10px'}}>

             <Paper variant='outlined'>{note.firstName}</Paper>
             <Paper variant='outlined'>{note.lastName}</Paper>
             <Paper variant='outlined'>{note.discription}</Paper>
             <Paper variant='outlined'>{note.category }</Paper>
            
            </Grid>
        ))}
        </Grid>
      
    </div>
  )
}

/*

*/