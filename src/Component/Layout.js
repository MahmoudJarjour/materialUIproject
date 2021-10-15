import {
  AppBar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import SubjectIcon from "@mui/icons-material/Subject";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useHistory, useLocation } from "react-router";
import { format } from "date-fns";
import Avatar from "@mui/material/Avatar";
import BarChartIcon from "@mui/icons-material/BarChart";
import i18n from "../Locals/i18n";

const drawerWidth = 240;
const ListMenu = [
  {
    text: "My Notes",
    icon: <SubjectIcon color="secondary" />,
    path: "/notes",
  },
  {
    text: "create Note",
    icon: <AddCircleOutlineIcon color="secondary" />,
    path: "/",
  },
  {
    text: "Charts",
    icon: <BarChartIcon color="secondary" />,
    path: "/charts",
  },
];
const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
    },
    title: {
      padding: theme.spacing(2),
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const onChange = (e) =>{
    i18n.changeLanguage(e.target.value)
  }
  
  return (
    <div className={classes.root}>
      {/* App Bar */}

      <AppBar className={classes.appbar} elevation={3}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM Y")}
          </Typography>
          
          <select name="languages" onChange={onChange}  >
            <option value="en" >English</option>
            <option value="ar" >Arabic</option>
          </select>



          <Typography>Mood Test</Typography>
          <Avatar src="/photo.jpg" className={classes.avatar} />
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.title}>
          <Typography variant="h5">Options</Typography>
        </div>

        {/* List / icon List */}
        <List>
          {ListMenu.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={
                location.pathname === item.path ? classes.active : null
              }
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Container className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </Container>
    </div>
  );
}
