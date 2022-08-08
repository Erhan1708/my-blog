import React from "react";
import styles from "./Main.module.css";

const Main = (props) => {
	return (
		<div className={styles.main}>
         <h1>{ props.pageName}</h1>
		</div>
	);
};

export default Main;
