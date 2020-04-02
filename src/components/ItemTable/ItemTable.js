import React, { useState } from 'react';
import { Table } from 'ka-table';
import { DataType, SortDirection, SortingMode } from 'ka-table/enums';
import woodSign from '../../assets/images/wood-sign.png';
import 'ka-table/style.css';
import './style.css';

const tableOptions = {
	columns: [
		{ dataType: DataType.String, key: 'name', sortDirection: SortDirection.Ascend, title: 'Name' },
		{ key: 'sellPrice', title: 'Sell Price', dataType: DataType.Number }
	],
	rowKeyField: 'id',
	sortingMode: SortingMode.Single
};

export default function ItemTable(props) {
	const [option, changeOptions] = useState(tableOptions);
	const onOptionChange = value => {
		changeOptions({ ...option, ...value });
	};

	return (
		<section className="item-table">
			<div className="item-table__container d-block d-sm-inline-block text-center">
				<img src={woodSign} alt="Wood sign"></img>
				<h5 className="item-table__category">{props.category}</h5>
			</div>
			<Table {...option} data={props.items} onOptionChange={onOptionChange} />
		</section>
	);
}
