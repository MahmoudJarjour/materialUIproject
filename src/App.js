
import { Suspense } from "react";
import "./App.css";
import Routers from "./Routes/material-ui-router";






const App = () => {
  

  return (
    <>
      <Suspense fallback="loading ...">
      <Routers />
      </Suspense>
      
    </>
  );
};

export default App;
