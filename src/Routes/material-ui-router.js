
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "../Component/Layout";
import Chartview from "../Pages/Chartview";
import HomePage from "../Pages/HomePage";
import Notes from "../Pages/Notes";
import ViewCard from "../Pages/ViewCard";
import i18next from "i18next";
import i18n from "../i18n";



// 
const Routers = () => {
  const getLanguage =() => i18next.language || window.localStorage.i18nextLng

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
      <Layout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route path="/charts" component={Chartview} />
          <Route path={"/card/:firstName"} component={ViewCard} />
          
          
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routers;
