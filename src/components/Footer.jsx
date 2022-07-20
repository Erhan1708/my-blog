import React from 'react'

const Footer = () => {
  return (
		<footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
			<button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom">
				Previous
			</button>
			<button className="w3-button w3-black w3-padding-large w3-margin-bottom">
				Next »
			</button>
			<p>
				Powered by{" "}
				<a href="https://www.w3schools.com/w3css/default.asp">
					w3.css
				</a>
			</p>
		</footer>
	);
}

export default Footer