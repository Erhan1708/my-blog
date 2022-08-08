import React from "react";
import styles from "./Contacts.module.css"
const Contacts = (props) => {
	return (
		<div className={styles.contacts}>
         <h1>{props.pageContacs}</h1>
		</div>
	);
};

export default Contacts;
