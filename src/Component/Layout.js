import { Container, Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import SubjectIcon from '@mui/icons-material/Subject';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useHistory, useLocation } from "react-router";

const drawerWidth = 240
const ListMenu = [
    {
        text:'My Notes',
        icon: <SubjectIcon color="secondary"/> ,
        path:'/notes',
    },
    {
        text:"create Note",
        icon: <AddCircleOutlineIcon color="secondary" />,
        path: '/',
    },
    

]
const useStyles = makeStyles({
    page:{
        background: '#f9f9f9',
        width: '100%'
    },
    drawer:{
        width: drawerWidth,
    },
    drawerPaper:{
        width: drawerWidth,
    },
    root:{
        display: 'flex'
    },
    active:{
        background:'#f4f4f4'
    }
})

export default function Layout( {children }){
const classes = useStyles();
const history = useHistory();
const location = useLocation();

    return (
        <div className={classes.root}>
            {/* App Bar */}

            {/* Side Drawer */}
            <Drawer className={classes.drawer}
                variant="permanent"
                anchor='left'
                classes ={{
                    paper: classes.drawerPaper
                }}
            
            >
                <div>
                    <Typography variant='h5'>
                        Options
                    </Typography> 
                </div>

                {/* List / icon List */}
                <List>
                    {ListMenu.map(item => (
                        <ListItem key={item.text}
                          button onClick={()=> history.push(item.path)}
                          className={location.pathname === item.path ? classes.active : null}
                          >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>


        <Container className={classes.page}>
            {children}
        </Container>
        
        </div>
    )
}