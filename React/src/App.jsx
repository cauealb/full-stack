import React from "react";

import Layout from "./components/Layout";
import GlobalSyle from './style/style.js'

import { ThemeProvider } from "styled-components";
import theme from "./style/theme/index.js";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalSyle />
      <Layout />
    </ThemeProvider>
  );
}
