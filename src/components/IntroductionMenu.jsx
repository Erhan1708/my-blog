import React from 'react'

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
			{/* Posts */}
			<div className="w3-card w3-margin">
				<div className="w3-container w3-padding">
					<h4>Popular Posts</h4>
				</div>
				<ul className="w3-ul w3-hoverable w3-white">
					<li className="w3-padding-16">
						<img
							src="https://www.w3schools.com/w3images/workshop.jpg"
							alt=""
							className="w3-left w3-margin-right"
							style={{ width: "50px" }}
						/>
						<span className="w3-large">Lorem</span>
						<br />
						<span>Sed mattis nunc</span>
					</li>
					<li className="w3-padding-16">
						<img
							src="https://www.w3schools.com/w3images/gondol.jpg"
							alt=""
							className="w3-left w3-margin-right"
							style={{ width: "50px" }}
						/>
						<span className="w3-large">Ipsum</span>
						<br />
						<span>Praes tinci sed</span>
					</li>
					<li className="w3-padding-16">
						<img
							src="https://www.w3schools.com/w3images/skies.jpg"
							alt=""
							className="w3-left w3-margin-right"
							style={{ width: "50px" }}
						/>
						<span className="w3-large">Dorum</span>
						<br />
						<span>Ultricies congue</span>
					</li>
					<li className="w3-padding-16 w3-hide-medium w3-hide-small">
						<img
							src="https://www.w3schools.com/w3images/rock.jpg"
							alt=""
							className="w3-left w3-margin-right"
							style={{ width: "50px" }}
						/>
						<span className="w3-large">Mingsum</span>
						<br />
						<span>Lorem ipsum dipsum</span>
					</li>
				</ul>
			</div>
			<hr />
			{/* Labels / tags */}
			<div className="w3-card w3-margin">
				<div className="w3-container w3-padding">
					<h4>Tags</h4>
				</div>
				<div className="w3-container w3-white">
					<p>
						<span className="w3-tag w3-black w3-margin-bottom">Travel</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							New York
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							London
						</span>
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							IKEA
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							NORWAY
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							DIY
						</span>
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Ideas
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Baby
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Family
						</span>
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							News
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Clothing
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Shopping
						</span>
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Sports
						</span>{" "}
						<span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
							Games
						</span>
					</p>
				</div>
			</div>
			{/* END Introduction Menu */}
		</div>
	);
}

export default IntroductionMenu