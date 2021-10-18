
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Component/Layout";
import Chartview from "../Pages/Chartview";
import HomePage from "../Pages/HomePage";
import Notes from "../Pages/Notes";
import ViewCard from "../Pages/ViewCard";
import i18next from "i18next";
import i18n from "../i18n";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@material-ui/styles";
import NotFound from '../Pages/NotFound'

const getLanguage = () => i18next.language || window.localStorage.i18nextLng;
const themes = createTheme({
	direction: getLanguage() === 'ar' ? 'rtl' : 'ltr',
	overrides: {
		MuiFormLabel: {
			root: {
				right: getLanguage() === 'ar' ? 30 : 'unset',
				left: getLanguage() === 'ar' ? 'unset' : 0,
				'&$focused': {
					right: getLanguage() === 'ar' ? 20 : 'unset',
					left: getLanguage() === 'ar' ? 'unset' : 0,
				},
				'&$filled': {
					right: getLanguage() === 'ar' ? 20 : 'unset',
					left: getLanguage() === 'ar' ? 'unset' : 0,
				},
			},
		},
	},
});
const Routers = () => {
  

  

  if ( window.location.pathname.split('/')[1] === 'ar'){
    i18next.changeLanguage('ar')
  }
  else{
    i18next.changeLanguage('en')
  }
  /* 


   */
  return (
    
    <BrowserRouter basename={getLanguage() === 'ar' ? 'ar' : 'en'} forceRefresh={true} >
        <ThemeProvider theme={themes}>
        <Layout>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route exact path="/notes">
                <Notes />
              </Route>
              <Route path="/charts" component={Chartview} />
              <Route path={"/card/:firstName"} component={ViewCard} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </ThemeProvider>
    </BrowserRouter>
  );
};

export default Routers;
