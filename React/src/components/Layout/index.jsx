import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import ListPost from "../ListPost";
import { useTheme } from "styled-components";

export default function Layout({ onToggleTheme, themes }) {
  const theme = useTheme()

  return (
    <>
        <Header 
          onToggleTheme={onToggleTheme} 
          themes={themes}
        />
        <ListPost />
        <Footer 
          onToggleTheme={onToggleTheme} 
          themes={themes}  
        />

        <div style={{
          marginTop: theme.spacing.large
        }}>
          Olá tudo bem?
        </div>
    </>
  );
}
