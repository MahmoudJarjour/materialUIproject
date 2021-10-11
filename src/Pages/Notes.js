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

  // delete card from the json file
  const handleDelete = async (id) =>{
    await fetch('http://localhost:3001/notes/'+id,{
        method:'DELETE'
    })

// delete card from the state and set the new state 
    
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
}

  return (
    <Container>

      
        <Grid container spacing={3}>
        {notes.map( note => (
           <Grid item key={note.id} sm={12} md={6} lg={3}  >
                <NoteCard note={note} handleDelete={handleDelete} />
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