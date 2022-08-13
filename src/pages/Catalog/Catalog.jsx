import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
// import { listProducts } from "../../constants/listofProducts";
import styles from "./Catalog.module.css";

const Catalog = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch("http://localhost:3001/listProducts")
         .then(response => {
            if (response.status === 200) {
               console.log(response);
               return response.json();
            }
            
         })
      .then(data => setProducts(data))
   },[])

	return (
		<div className={styles.catalog}>
			<h1>каталог</h1>
			<div className={styles.products}>
				{products.map((post) => (
               <div key={post.id}>
                  <Link to={`/catalog/${post.title}`}>
						<h3>{post.title}</h3>
                  </Link>
               </div>
					
				))}
			</div>
		</div>
	);
};

export default Catalog;
