import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Routers from "./Routes/material-ui-router";
// import i18n (needs to be bundled ;))

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
