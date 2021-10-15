import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import useStyles from "./Styles";
import { useHistory } from "react-router-dom";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
} from "@material-ui/core";

import Radio from "@material-ui/core/Radio";
import { withTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = withTranslation();
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [discription, setDiscription] = useState("");

  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [discriptionError, setDiscriptionError] = useState(false);

  const [category, setCategory] = useState("male");

  const handelSubmit = (e) => {
    e.preventDefault();
    setfirstNameError(false);
    setlastNameError(false);
    setDiscriptionError(false);

    if (firstName === "") setfirstNameError(true);
    if (lastName === "") setlastNameError(true);
    if (discription === "") setDiscriptionError(true);

    if (firstName && lastName && discription && category) {
      fetch("http://localhost:3001/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ firstName, lastName, discription, category }),
      }).then(() => history.push("/notes"));
    }
  };
  return (
    <>
      <Container className={classes.Typo}>
        <Button
          fullWidth
          className={classes.Button}
          startIcon={<DoubleArrowIcon />}
          variant="contained"
          onClick={() => history.push("/vjbkf")}
        >
          {t('button to 404 page')}
        </Button>
      </Container>

      <Container>
        <form noValidate autoComplete="off" onSubmit={handelSubmit}>
          <TextField
            onChange={(e) => setfirstName(e.target.value)}
            id="TextField1"
            fullWidth
            required
            variant="standard"
            color="primary"
            label={t("First Name")}
            placeholder={t("First Name")}
            className={classes.textfield}
            error={firstNameError}
          />

          <TextField
            onChange={(e) => setlastName(e.target.value)}
            id="TextField2"
            fullWidth
            required
            variant="filled"
            color="secondary"
            label={t("Second Name")}
            placeholder={t("Second Name")}
            className={classes.textfield}
            error={lastNameError}
          />

          <TextField
            onChange={(e) => setDiscription(e.target.value)}
            id="TextField1"
            multiline
            rows={4}
            fullWidth
            required
            variant="outlined"
            color="primary"
            label="discription"
            placeholder={t("discription")}
            className={classes.textfield}
            error={discriptionError}
          />

          <Button
            fullWidth
            className={classes.Button}
            startIcon={<DoubleArrowIcon />}
            variant="contained"
            type="submit"
          >
            {t('Submit')}
          </Button>
        </form>
      </Container>

      <Container style={{ paddingTop: "20px" }}>
        <FormControl>
          <FormLabel>Select Category</FormLabel>
          <RadioGroup
            value="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </Container>
    </>
  );
};
export default HomePage;
