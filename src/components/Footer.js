import React from 'react';
import octocat from '../assets/images/Octocat.png';
import '../App.css';

function Footer() {
	return (
		<footer style={style}>
			<a href="https://github.com/vmroycroft" target="_blank" rel="noopener noreferrer" title="View project on Github">
				<img src={octocat} alt="Github Octocat" style={imgStyle} />
			</a>
			<div>ACNH Data Viewer {process.env.REACT_APP_VERSION}</div>
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
