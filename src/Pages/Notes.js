import React, { useEffect, useState } from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import NoteCard from '../Component/NoteCard';

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
        {notes.map( note => (
           <Grid item key={note.id} sm={12} md={6} lg={3}  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <NoteCard note={note} />
            </Grid>
                            )
                  )
        }
        </Grid>
      
    </Container>
  )
}

/*

*/