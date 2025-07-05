import React from "react";

import Layout from "./components/Layout";
import GlobalSyle from './style/style.js'


import AppContext from "./components/Context/AppContext.jsx";

export default function App() {
  return (
    <AppContext>
      <GlobalSyle />
      <Layout />
    </AppContext>
  )
}
