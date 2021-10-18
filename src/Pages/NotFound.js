import React from "react";
import { Button, ButtonGroup, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useStyles from "./Styles";
import { useHistory } from "react-router-dom";
import { useTranslation, withTranslation } from "react-i18next";


const NotFound = () => {
  const classes = useStyles();
  let history = useHistory();
  const {t} = useTranslation();
  return (
    <>
      <Typography variant="h2" align="center" gutterBottom color="secondary">
        {t('404 Page Not Found (just for random URL)')}
      </Typography>

      <Button
        endIcon={<ArrowBackIcon color="primary" />}
        variant="outlined"
        color="primary"
        onClick={() => history.goBack()}
      >
        {t("Home")}
      </Button>

      <ButtonGroup
        className={classes.ButtonGroups}
        variant="default"
        type="submit"
        color="secondary"
      >
        <Button
          className={classes.Button}
          onClick={() => console.log("you click the First button")}
        >
          {t('First')}
        </Button>
        <Button onClick={() => console.log("you click the second")}>
          {t('Second')}
        </Button>
      </ButtonGroup>
    </>
  );
};
export default withTranslation()  (NotFound);
