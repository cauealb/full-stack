import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import ListPost from "../ListPost";
import { useTheme } from "styled-components";

export default function Layout({ onToggleTheme, themes }) {
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
    </>
  );
}
