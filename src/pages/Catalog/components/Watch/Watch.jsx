import React from 'react'
import { Link } from 'react-router-dom';
import { watch } from '../../../../constants/Watch';
import styles from "./Watch.module.css"
const Watch = () => {
  return (
		<div className={styles.watch}>
			<div>
				<h1>Watch</h1>
			</div>
			<div className={styles.watchs}>
				{watch.map((postWatch) => (
					<div className={styles.block_watch}>
						<Link to={`/product/${postWatch.id}`}>
							<img src={postWatch.img} alt="" />
						</Link>
						<Link to={`/product/${postWatch.id}`}>
							<h3>{postWatch.title}</h3>
						</Link>
						<h4>от {postWatch.price} coм</h4>
						<Link
							style={{ color: "rgb(0, 162, 255)" }}
							to={`/product/${postWatch.id}`}
						>
							Выбрать
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

export default Watch