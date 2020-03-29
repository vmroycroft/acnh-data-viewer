import React from 'react';
import appleBorder from '../assets/images/apple-border.png';

function Header() {
	return <header style={style}></header>;
}

const style = {
	backgroundImage: `url(${appleBorder})`,
	backgroundSize: '995px 125px',
	height: '125px'
};

export default Header;
