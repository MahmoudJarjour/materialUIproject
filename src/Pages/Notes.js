import React, { useEffect, useState } from 'react'

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [])

  return (
    <div>
      {notes.map(note => (
        <p key={note.id}>{ note.firstName + " " +note.lastName + " " + note.discription + " " + note.category }</p>
      ))}
    </div>
  )
}