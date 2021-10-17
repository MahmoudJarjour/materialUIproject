import React from "react";
import { withTranslation } from "react-i18next";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "../Component/Layout";
import Chartview from "../Pages/Chartview";
import HomePage from "../Pages/HomePage";
import Notes from "../Pages/Notes";
import NotFound from "../Pages/NotFound";
import ViewCard from "../Pages/ViewCard";

const Routers = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Routers;
