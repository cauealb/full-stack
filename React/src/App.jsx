import React, { useMemo, useState } from "react";

import Layout from "./components/Layout";
import GlobalSyle from './style/style.js'

import { ThemeProvider } from "styled-components";
import theme from "./style/theme/index.js";

export default function App() {
  const [theme, setTheme] = useState('dark')

  const currenTheme = useMemo(() => {
    
  }, [theme])

  return (
    <ThemeProvider theme={theme.light}>
      <GlobalSyle />
      <Layout />
    </ThemeProvider>
  );
}
