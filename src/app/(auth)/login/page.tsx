//"use client" .....If you want to render a component on client, You can use this. 

import React from "react";
import styles from "./login.module.css";

// LoginPage is by default server component

const LoginPage = () => {
    return <div className={styles.login}>LoginPage</div>;
};

export default LoginPage;

//Server components are rendered on the server by default.