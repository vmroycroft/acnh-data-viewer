import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Table } from 'ka-table';
import { DataType, SortDirection, SortingMode } from 'ka-table/enums';

import 'ka-table/style.css';

const ITEMS_QUERY = gql`
	{
		items {
			name
			sellPrice
		}
	}
`;

const tableOptions = {
	columns: [
		{ dataType: DataType.String, key: 'name', sortDirection: SortDirection.Ascend, title: 'Name' },
		{ key: 'sellPrice', title: 'Sell Price', dataType: DataType.Number }
	],
	rowKeyField: 'id',
	sortingMode: SortingMode.Single
};

function ItemTable(props) {
	const { loading, error, data } = useQuery(ITEMS_QUERY);

	const [option, changeOptions] = useState(tableOptions);
	const onOptionChange = value => {
		changeOptions({ ...option, ...value });
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<section style={style}>
			<h5 style={categoryStyle}>{props.category}</h5>
			<Table {...option} data={data.items} onOptionChange={onOptionChange} />
		</section>
	);
}

const style = {
	marginTop: '2rem'
};

const categoryStyle = {
	backgroundImage: 'url(/images/wood-sign.png',
	backgroundRepeat: 'no-repeat',
	backgroundSize: '25%',
	height: '107px',
	color: '#ffffff',
	textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)'
};

// const categoryStyle = {
// 	backgroundImage: 'url(/images/dots.png',
// 	backgroundSize: '48px 48px',
// 	backgroundColor: '#F7AA18',
// 	// backgroundColor: '#5D4037',
// 	marginBottom: 0,
// 	color: '#ffffff',
// 	textShadow: '0 2px 2px rgba(0, 0, 0, 0.5)',
// 	padding: '1rem'
// };

export default ItemTable;
