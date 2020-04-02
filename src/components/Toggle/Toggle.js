import React from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import './style.css';

export default function Toggle() {
	return (
		<ToggleButtonGroup type="radio" name="hemisphere" defaultValue="northern" className="float-sm-right mt-3 mt-sm-0 d-block text-center">
			<ToggleButton value="northern">Northern Hemisphere</ToggleButton>
			<ToggleButton value="southern">Southern Hemisphere</ToggleButton>
		</ToggleButtonGroup>
	);
}
