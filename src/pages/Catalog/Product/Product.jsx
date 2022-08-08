import React from "react";
import styles from "./Product.module.css";
import { useParams, useSearchParams } from "react-router-dom";
import { iphones } from "../../../constants/iphones";
import { watch } from "../../../constants/Watch";

const Product = () => {
	const paramsIphone = useParams();
	const paramsWatch = useParams();

	const [searchParams] = useSearchParams();
	const productIphone = iphones.find(
		(postIphone) => postIphone.id === +paramsIphone.id
	);
	const productWatch = watch.find(
		(postWatch) => postWatch.id === +paramsWatch.id
	);

	return (
		<>
			{/* Iphone */}
			<div className={styles.product}>
				<img src={productIphone.img} alt="" />
				<div>
					<div className={styles.title}>
						<h3>{productIphone.title}</h3>
						<h4>{productIphone.price} сом</h4>
					</div>
					<div className={styles.memory}>
						<span>{productIphone.memory.memory1} </span>
						<span>{productIphone.memory.memory2} </span>
						<span>{productIphone.memory.memory3} </span>
						<span>{productIphone.memory.memory4} </span>
					</div>
					<div className={styles.characteristics}>
						<div>
							<p>{productIphone.characteristics.camera}</p>
							<p>{productIphone.characteristics.screenSize}</p>
						</div>
						<div>
							<p>{productIphone.characteristics.processor}</p>
							<p>{productIphone.characteristics.display}</p>
						</div>
					</div>
					<div>
						<h5 className={styles.quantity_status}>
							{+searchParams.get("quantity") === 0
								? "нет в наличии"
								: "Товар в наличии"}
						</h5>
					</div>
				</div>
			</div>

			{/* Watch */}

			<div className={styles.product}>
				<img src={productWatch.img} alt="" />
				<div>
					<div className={styles.title}>
						<h3>{productWatch.title}</h3>
						<h4>{productWatch.price} сом</h4>
					</div>
					<div className={styles.caseSize}>
						<span>{productWatch.caseSize.caseSize1} </span>
						<span>{productWatch.caseSize.caseSize2} </span>
					</div>
					<div className={styles.Connectivity}>
						<span>{productWatch.Connectivity.Connectivity1} </span>
						<span>{productWatch.Connectivity.Connectivity2} </span>
					</div>
					<div className={styles.characteristics}>
						<div>
							<p>{productWatch.characteristics.characteristics1}</p>
							<p>{productWatch.characteristics.characteristics2}</p>
						</div>
						<div>
							<p>{productWatch.characteristics.characteristics3}</p>
							<p>{productWatch.characteristics.characteristics4}</p>
						</div>
					</div>
					<div>
						<h5 className={styles.quantity_status}>
							{+searchParams.get("quantity") === 0
								? "нет в наличии"
								: "Товар в наличии"}
						</h5>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
