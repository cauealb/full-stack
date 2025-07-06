import React, { useContext, useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";
import ListPost from "../ListPost";
import { Context } from "../Context/AppContext";

export default function Layout() {
  const { themes } = useContext(Context)

  useEffect(() => {

    return () => {
      console.debug('Saiu o <Layout />')
    }

  }, [themes])

  return (
    <>
        <Header />
        <ListPost />
        <Footer />
    </>
  );
}
