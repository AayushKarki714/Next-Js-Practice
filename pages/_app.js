import "../styles/globals.css";
import React from "react";
import NavBar from "../components/NavBar";

function App({ Component, pageProps }) {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
