import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './style.css';

export default function Search() {
	const [input, setInput] = useState('');

	/**
	 *
	 */
	function search(e) {
		// hide all items that don't contain the search term
	}

	return (
		<InputGroup className="mb-3">
			<FormControl
				value={input}
				onChange={e => setInput(e.target.value)}
				placeholder="Type a name, location, or sell price"
				aria-label="Search"
				aria-describedby="basic-addon1"
			/>
			<InputGroup.Append>
				<Button onClick={search}>Search</Button>
			</InputGroup.Append>
		</InputGroup>
	);
}
