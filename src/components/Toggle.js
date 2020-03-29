import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Toggle() {
	return (
		<ToggleButtonGroup type="radio" name="hemisphere" defaultValue="northern" className="float-sm-right mt-3 mt-sm-0 d-block text-center">
			<ToggleButton value="northern" size="sm">
				Northern Hemisphere
			</ToggleButton>
			<ToggleButton value="southern" size="sm">
				Southern Hemisphere
			</ToggleButton>
		</ToggleButtonGroup>
	);
}

const style = {
	float: 'right'
};

export default Toggle;
