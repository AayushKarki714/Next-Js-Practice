import React from "react";
import Head from "next/head";

function About() {
  console.log("[About Page]");
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <h1>About</h1>
    </div>
  );
}

export default About;
