import React from "react";
import { Link, } from "react-router-dom";
import styles from "./Catalog.module.css";
const Catalog = () => {
	return (
		<div className={styles.catalog}>
			<h1>каталог</h1>
			<div className={styles.products}>
				<Link to="/catalog/iphone">
					<h3>Iphone</h3>
				</Link>
				<Link to="/catalog/watch">
					<h3> Watch</h3>
				</Link>
			</div>
		</div>
	);
};

export default Catalog;
