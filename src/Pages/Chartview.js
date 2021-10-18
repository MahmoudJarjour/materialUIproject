import React from "react";
import { withTranslation } from "react-i18next";
import Charts from "../Component/Charts";

const Chartview = ()=> {
  return <Charts />;
}

export default withTranslation() (Chartview);
