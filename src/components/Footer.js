import React from 'react';

import '../App.css';

function Footer() {
	return (
		<footer style={style}>
			<a href="https://github.com/vmroycroft" target="_blank" title="View project on Github">
				<img src="/images/Octocat.png" style={imgStyle} />
			</a>
			<div>ACNH Data Viewer 0.1.0</div>
			<div>Designed & Built by Vanessa Roycroft</div>
			<div id="footer-grass"></div>
		</footer>
	);
}

const style = {
	textAlign: 'center',
	paddingTop: '1rem',
	marginTop: '3rem',
	fontSize: '0.8rem'
};

const imgStyle = {
	height: '2rem',
	marginBottom: '0.15rem'
};

export default Footer;
