import React from "react";
import { postOfTheDay } from "./../constants/index";
/* BLOG ENTRIES */
const BlockEntries = () => {
	return (
		<div className="w3-col l8 s12">
			{postOfTheDay.map((post) => (
				<div className="w3-card-4 w3-margin w3-white">
					<img src={post.img} alt="Nature" style={{ width: "100%" }} />
					<div className="w3-container">
						<h3>
							<b>{post.title}</b>
						</h3>
						<h5>
							{post.underTitle}, <span className="w3-opacity">{post.date}</span>
						</h5>
					</div>
					<div className="w3-container">
						<p>{post.content}</p>
						<div className="w3-row">
							<div className="w3-col m8 s12">
								<p>
									<button className="w3-button w3-padding-large w3-white w3-border">
										<b>READ MORE »</b>
									</button>
								</p>
							</div>
							<div className="w3-col m4 w3-hide-small">
								<p>
									<span className="w3-padding-large w3-right">
										<b>{post.comment} &nbsp;</b>{" "}
										<span className="w3-tag">{post.commentNumber}</span>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
			<hr />
		</div>
	);
};

export default BlockEntries;
