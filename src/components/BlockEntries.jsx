import React from 'react'

const BlockEntries = () => {
  return (
		<div className="w3-col l8 s12">
			{/* Blog entry */}
			<div className="w3-card-4 w3-margin w3-white">
				<img
					src="https://www.w3schools.com/w3images/woods.jpg"
					alt="Nature"
					style={{ width: "100%" }}
				/>
				<div className="w3-container">
					<h3>
						<b>TITLE HEADING</b>
					</h3>
					<h5>
						Title description, <span className="w3-opacity">April 7, 2014</span>
					</h5>
				</div>
				<div className="w3-container">
					<p>
						Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
						Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
						enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
						congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
						vitae justo condimentum, porta lectus vitae, ultricies congue
						gravida diam non fringilla.
					</p>
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
									<b>Comments &nbsp;</b> <span className="w3-tag">0</span>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
			{/* Blog entry */}
			<div className="w3-card-4 w3-margin w3-white">
				<img
					src="https://www.w3schools.com/w3images/bridge.jpg"
					alt="Norway"
					style={{ width: "100%" }}
				/>
				<div className="w3-container">
					<h3>
						<b>BLOG ENTRY</b>
					</h3>
					<h5>
						Title description, <span className="w3-opacity">April 2, 2014</span>
					</h5>
				</div>
				<div className="w3-container">
					<p>
						Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
						Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
						enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
						congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
						vitae justo condimentum, porta lectus vitae, ultricies congue
						gravida diam non fringilla.
					</p>
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
									<b>Comments &nbsp;</b> <span className="w3-badge">2</span>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* END BLOG ENTRIES */}
		</div>
	);
}

export default BlockEntries