import React from "react";
import styles from "./NotFound.module.css"
const NotFound = () => {
	return (
		<>
			<div className={styles.over}></div>
			<div className={styles.four}>404</div>
			<div className={styles.notfound}>
				страница не найдена
				<br />
				<a href="/"> перейти на главную страницу..</a>
			</div>
		</>
	);
};

export default NotFound;
