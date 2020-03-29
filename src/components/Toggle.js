import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Toggle() {
	return (
		<ToggleButtonGroup type="radio" name="hemisphere" defaultValue="northern" style={style}>
			<ToggleButton value="northern" size="lg">
				Northern Hemisphere
			</ToggleButton>
			<ToggleButton value="southern" size="lg">
				Southern Hemisphere
			</ToggleButton>
		</ToggleButtonGroup>
	);
}

const style = {
	width: '100%',
	marginTop: '2rem'
};

export default Toggle;
