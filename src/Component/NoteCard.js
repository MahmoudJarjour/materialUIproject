import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function NoteCard({note , handleDelete}){
    return (
        <>

        <Grid  > 
            <Card elevation={3}>
                <CardHeader 
                    action={
                        <IconButton onClick={()=> handleDelete(note.id)}>
                            <DeleteOutlineIcon />
                        </IconButton>
                        }
                        title={note.firstName +" " + note.lastName}
                        subheader= {note.category}
                >
                </CardHeader>
                <CardMedia
                    component="img"
                    height="194"
                    image='https://picsum.photos/803'
                    alt="https://picsum.photos/803"
                >
                </CardMedia>
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {note.discription}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>   
        </>
        )
}
