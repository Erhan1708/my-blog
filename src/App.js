import React from 'react'
import BlockEntries from './components/BlockEntries';
import Footer from './components/Footer'
import Header from './components/Header';
import IntroductionMenu from './components/IntroductionMenu/IntroductionMenu';

const App = () => {
  return (
		<>
			<div className="w3-content" style={{ maxWidth: 1400 }}>
				<Header />
           <div className="w3-row">
              <BlockEntries/>
              <IntroductionMenu/>
            </div>
			</div>

			<Footer />
		</>
	);
}

export default App
