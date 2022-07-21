import React from 'react'
import Labels from './Labels';
import Posts from './Posts';

const IntroductionMenu = () => {
  return (
		<div className="w3-col l4">
			{/* About Card */}
			<div className="w3-card w3-margin w3-margin-top">
				<img
					src="https://www.w3schools.com/w3images/avatar_g.jpg"
					alt=""
					style={{ width: "100%" }}
				/>
				<div className="w3-container w3-white">
					<h4>
						<b>My Name</b>
					</h4>
					<p>
						Just me, myself and I, exploring the universe of uknownment. I have
						a heart of love and a interest of lorem ipsum and mauris neque quam
						blog. I want to share my world with you.
					</p>
				</div>
			</div>
			<hr />
        <Posts />
        <Labels/>
		</div>
	);
}

export default IntroductionMenu