import React, { useEffect, useContext } from "react";
import styles from "./Iphone.module.css";
import { Link, useParams } from "react-router-dom";
import ProductContext from "../../../../context/context";
// import { iphones } from "../../../../constants/iphones";

const Iphone = () => {
	const { products, setProducts } = useContext(ProductContext);

	const params = useParams();

	// const getProduct = (data) => {
	// 	const id = data.id;
	// 	let cart = JSON.parse(localStorage.getItem("cart")) || {};
	// 	cart[id] = { ...data, count: 1 };
	// 	localStorage.setItem("card", JSON.stringify(cart));
	// };

	useEffect(() => {
		fetch(`http://localhost:3001/${params.title}`)
			.then((response) => {
				if (response.status === 200) {
					console.log(response);
					return response.json();
				}
			})
			.then((data) => setProducts(data));
	}, [params.title, setProducts]);
	return (
		<div className={styles.iphone}>
			<div className={styles.iphones}>
				{products.map((post) => (
					<div key={post.id} className={styles.block_iphone}>
						<Link to={`/product/${post.ProductTitle}/${post.id}`}>
							<img src={post.img} alt="" />
						</Link>
						<Link to={`/product/${post.ProductTitle}/${post.id}`}>
							<h3>{post.title}</h3>
						</Link>
						<h4>от {post.price} coм</h4>
						<Link
							style={{ color: "rgb(0, 162, 255)" }}
							// onClick={() => getProduct(post)}
                     to={`/product/${post.ProductTitle}/${post.id}`}
						>
							
							Выбрать
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Iphone;
