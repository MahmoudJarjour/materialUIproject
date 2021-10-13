import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    Button: {
      backgroundColor: "primary",
      "&:hover": {
        backgroundColor: "secondary",
      },
      marginLeft: "35%",
      display: "flex",
      padding: theme.spacing(3),
    },
    Typo: {
      color: "pink",
    },
    ButtonGroups: {
      backgroundColor: "red",
      marginLeft: "35%",
      padding: "10px",
      margin: "auto",
      display: "flex",
    },
    textfield: {
      marginTop: "20px",
      marginBottom: "20px",
      display: "block",
    },
  };
});

export default useStyles;
