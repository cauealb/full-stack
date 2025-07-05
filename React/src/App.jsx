import React, { useMemo, useState } from "react";

import Layout from "./components/Layout";
import GlobalSyle from './style/style.js'

import { ThemeProvider } from "styled-components";
import theme from "./style/theme/index.js";

export default function App() {
  const [themes, setThemes] = useState('dark')

  const currentTheme = useMemo(() => {
    return theme[themes] || theme.dark;
  }, [themes])

  console.log(currentTheme)

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalSyle />
      <Layout />
    </ThemeProvider>
  );
}
