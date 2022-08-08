import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {

const setActive = ({ isActive }) => (isActive ? styles.active : "");

	return (
		<div className={styles.header}>
			<ul>
				<li>
					<NavLink className={setActive} to="/">Главная</NavLink>
				</li>
				<li>
					<NavLink className={setActive} to="/about">О нас</NavLink>
				</li>
				<li>
					<NavLink className={setActive} to="/contacts">Контакты</NavLink>
				</li>
				<li>
					<NavLink className={setActive} to="/catalog">Каталог</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Header;
