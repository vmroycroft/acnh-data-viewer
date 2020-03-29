import React, { useState } from 'react';
import { Table } from 'ka-table';
import { DataType, SortDirection, SortingMode } from 'ka-table/enums';

import 'ka-table/style.css';

const tableOptions = {
	columns: [
		{ dataType: DataType.String, key: 'name', sortDirection: SortDirection.Ascend, title: 'Name' },
		{ key: 'location', title: 'Location', dataType: DataType.String },
		{ key: 'sellPrice', title: 'Sell Price', dataType: DataType.Number },
		{ key: 'notes', title: 'Note', dataType: DataType.String }
	],
	rowKeyField: 'id',
	sortingMode: SortingMode.Single
};

function ItemTable(props) {
	const [option, changeOptions] = useState(tableOptions);
	const onOptionChange = value => {
		changeOptions({ ...option, ...value });
	};

	return (
		<section style={style}>
			<div style={conStyle} className="d-block d-sm-inline-block text-center">
				<img src="/images/wood-sign.png" alt="Wood sign" style={imgStyle}></img>
				<h5 style={categoryStyle}>{props.category}</h5>
			</div>
			<Table {...option} data={props.items} onOptionChange={onOptionChange} />
		</section>
	);
}

const conStyle = {
	position: 'relative',
	display: 'inline-block',
	color: '#ffffff',
	textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
	marginBottom: '1rem'
};

const style = {
	marginTop: '2rem'
};

const imgStyle = {};

const categoryStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	fontSize: '1.75rem',
	color: '#ffffff',
	textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)'
};

export default ItemTable;
