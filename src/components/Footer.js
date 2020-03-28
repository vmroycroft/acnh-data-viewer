import React from 'react';

function Footer() {
	return (
		<footer style={style}>
			<div>ACNH Data Viewer 0.1.0</div>
			<div>Designed & Built by Vanessa Roycroft</div>
			<a href="https://github.com/vmroycroft" target="_blank" title="View project on Github">
				<img src="/images/Octocat.png" style={imgStyle} />
			</a>
		</footer>
	);
}

const style = {
	// backgroundImage: 'url(/images/green-triangles.png)',
	// backgroundColor: '#01A623',
	// backgroundSize: '156px 154.5px',
	// backgroundPosition: '50% 28%',
	// color: 'white',
	position: 'absolute',
	bottom: 0,
	left: 0,
	right: 0,
	textAlign: 'center',
	paddingBottom: '1rem',
	fontSize: '0.8rem'
};

const imgStyle = {
	height: '3rem',
	marginTop: '0.5rem'
};

export default Footer;
