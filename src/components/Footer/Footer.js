import React from 'react';
import octocat from '../../assets/images/Octocat.png';
import './style.css';

export default function Footer() {
	return (
		<footer className="footer text-center mt-16">
			<a href="https://github.com/vmroycroft/acnh-data-viewer" target="_blank" rel="noopener noreferrer" title="View project on Github">
				<img src={octocat} alt="Github Octocat" className="footer__image" />
			</a>
			<div>ACNH Data Viewer {process.env.REACT_APP_VERSION}</div>
			<div id="footer-grass"></div>
		</footer>
	);
}
