import React from "react";
import Head from "next/head";

import styles from "@/styles/Home.module.css";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Payback</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className={`${styles.main}`}
      >
        <NavBar />
        <div style={{ paddingTop: "50px" }}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
