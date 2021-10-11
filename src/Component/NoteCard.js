import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const useStyles = makeStyles({
    test:{
        border: (note) => {
             if(note.category === 'other'){
                 return '1px solid red'
             }
        },
        color: (note) => {
            if(note.firstName === 'mahmoud'){
                return 'blue'
            }
        },

    },
        
    }
)

export default function NoteCard({note , handleDelete}){
    const classes = useStyles(note);
    return (
        <>

        <Grid  > 
            <Card elevation={3} className={classes.test}>
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
