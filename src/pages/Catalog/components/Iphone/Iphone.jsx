import React,{useEffect, useState} from "react";
import styles from "./Iphone.module.css";
import { Link } from "react-router-dom";
// import { iphones } from "../../../../constants/iphones";

const Iphone = () => {
   const [iphone, setIphone] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3001/iphones")
         .then(response => {
            if (response.status === 200) {
               console.log(response);
               return response.json()
            }
         })
         .then(data => setIphone(data))
   }, []);

	return (
		<div className={styles.iphone}>
			<div>
				<h1>Iphone</h1>
			</div>
			<div className={styles.iphones}>
				{iphone.map((postIphone) => (
					<div className={styles.block_iphone}>
						<Link to={`/product/${postIphone.id}`}>
							<img src={postIphone.img} alt="" />
						</Link>
						<Link to={`/product/${postIphone.id}`}>
							<h3>{postIphone.title}</h3>
						</Link>
						<h4>от {postIphone.price} coм</h4>
						<Link
							style={{ color: "rgb(0, 162, 255)" }}
							to={`/product/${postIphone.id}`}>
							Выбрать
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Iphone;
