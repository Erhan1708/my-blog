import React ,{useContext} from "react";
import styles from "./Product.module.css";
import { useParams, useSearchParams } from "react-router-dom";
// import { iphones } from "../../../constants/iphones";
import ProductContext from "../../../context/context"

const Product = () => {
   const params = useParams();
   
   const { products } = useContext(ProductContext);

   const [searchParams] = useSearchParams();
   
	const product = products.find(post => post.id === +params.id);
	return (
		<>
			{/* Iphone */}
			<div className={styles.product}>
				<img src={product?.img} alt="" />
				<div>
					<div className={styles.title}>
						<h3>{product?.title}</h3>
						<h4>{product?.price} сом</h4>
					</div>
					<div className={styles.memory}>
						<span>{product?.equipment.equipmentA} </span>
						<span>{product?.equipment.equipmentB} </span>
						<span>{product?.equipment.equipmentC} </span>
						<span>{product?.equipment.equipmentD} </span>
					</div>
					<div className={styles.characteristics}>
						<div>
							<p>{product?.characteristics.characteristics1}</p>
							<p>{product?.characteristics.characteristics2}</p>
						</div>
						<div>
							<p>{product?.characteristics.characteristics3}</p>
							<p>{product?.characteristics.characteristics4}</p>
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
