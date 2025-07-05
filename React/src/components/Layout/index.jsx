import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import ListPost from "../ListPost";

export default function Layout({ onToggleTheme }) {
  return (
    <>
        <Header onToggleTheme={onToggleTheme} />
        <ListPost />
        <Footer onToggleTheme={onToggleTheme} />
    </>
  );
}
