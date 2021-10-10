
import React from "react";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Notes from "../Pages/Notes";
import NotFound from "../Pages/NotFound";

const Routers = () => {
    return(
        
        <>
        <BrowserRouter >
            <Switch>
                <Route path="/" exact component={HomePage} /> 
                <Route exact path="/notes">
                    <Notes />
                </Route>
                <Route  component={NotFound}/>
            </Switch>
        </BrowserRouter>
        </>
    )
    
}

export default Routers;