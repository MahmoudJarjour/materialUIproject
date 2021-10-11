import { Avatar, Card, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { blue, purple , gray, pink } from "@material-ui/core/colors";


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
    avatar:{
        backgroundColor: (note) =>{
            if(note.category === 'male'){
                return blue[500]
            }
            if(note.category === 'female'){
                return purple[500]
            }
            if(note.category === 'other'){
                return pink[500]
            }
        }
    }
        
    }
)

export default function NoteCard({note , handleDelete}){
    const classes = useStyles(note);
    return (
        <>

        <Grid  > 
            <Card elevation={3} className={classes.test}>
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar} variant='rounded'>{note.category[0].toUpperCase()}</Avatar>
                    }

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
