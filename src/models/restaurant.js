import  '../styles/Restaurant.css';

import * as React from "react";

class Restaurant extends React.Component {
    
	constructor(props) {
    super(props);
  }

	render() {
		return(
			<div>
				<div>
					<ul className='nav-flex-row'>
						<li className='nav-flex-row-li'>
							<a className='nav-flex-row-li-a' href='#about'>ABOUT</a>
						</li>
						<li className='nav-flex-row-li'>
							<a className='nav-flex-row-li-a' href='#about'>RESERVATION</a>
						</li>
						<li className='nav-flex-row-li'>
							<a className='nav-flex-row-li-a' href='#about'>MENU</a>
						</li>
						<li className='nav-flex-row-li'>
							<a className='nav-flex-row-li-a' href='#about'>SHOP</a>
						</li>
					</ul>
				</div>
				<div className='section-intro'>
					<header className='section-intro-header'>
						<h1 className='section-intro-h1'> Foooodie</h1>
					</header>
					<div className='link-to-book-wrapper'>
						<a href='#foogle' className='link-to-book'>Book a table</a>
					</div>
				</div>
			</div>
		)
	}
}

export default Restaurant;