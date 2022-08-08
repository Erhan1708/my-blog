import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
const About = () => {

   const [users, setUsers] = useState([]);

   useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
         .then(response => {
            if (response.status === 200) {
               console.log(response);
               return response.json()
               
            } else {
               console.log('произошла ошибка. Статус ошибки:' + response.status);
            }
         })
   .then(data => setUsers(data))
	}, []);

	return (
		<div className={styles.about}>
         <h1>О нас</h1>
         <ul>
            {users.map(item => <li>{item.name}</li>)}
         </ul>
		</div>
	);
};

export default About;
