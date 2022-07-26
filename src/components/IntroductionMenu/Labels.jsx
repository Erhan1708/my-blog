import React from "react";
import { tags } from "../../constants";

const margin = { marginRight: "5px" };

const Labels = () => {
	// const tagsArray = tags.map((tag) => (
	// 	<span
	// 		className="w3-tag w3-light-grey w3-small w3-margin-bottom"
	// 		style={margin}
	// 	>
	// 		{tag}
	// 	</span>
	// ));
   const removeActive = () => {
      const elements = document.querySelectorAll('.w3-tag')
      
      for (let i = 0; i < elements.length; i++) {
         if (elements[i].classList.contains('w3-black')) {
            elements[i].classList.remove('w3-black');
            elements[i].classList.add("w3-light-grey");
            elements[i].classList.add("w3-small");
         }
      }
   }

   const activated = (e) => {
      removeActive();
      e.target.classList.add('w3-black');
      e.target.classList.remove('w3-light-grey');
      e.target.classList.remove("w3-small");
}

	return (
		<>
			{/* Labels / tags */}
			<div className="w3-card w3-margin">
				<div className="w3-container w3-padding">
					<h4>Tags</h4>
				</div>
				<div className="w3-container w3-white">
					<p>
						{tags.map(tag => (
                     <span
                        onClick={activated}
								className="w3-tag w3-light-grey w3-small w3-margin-bottom"
								style={margin}>
								{tag}
							</span>
						))}
					</p>
				</div>
			</div>
		</>
	);
};

export default Labels;
