import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function NoteCard({note}){
    return (
        <>

        <Grid  > 
            <Card>
                <CardHeader 
                    action={
                        <IconButton aria-label="settings">
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
                    image='https://picsum.photos/203'
                    alt="https://picsum.photos/203"
                >
                </CardMedia>
                <CardContent>
                    <Typography>
                        {note.discription}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>   
        </>
        )
}
