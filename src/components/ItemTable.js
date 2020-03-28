import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Container from 'react-bootstrap/Container';
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

function ItemTable() {
	const { loading, error, data } = useQuery(ITEMS_QUERY);
	console.log(data);

	const [option, changeOptions] = useState(tableOptions);
	const onOptionChange = value => {
		changeOptions({ ...option, ...value });
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<section style={style}>
			<Container>
				<h1 style={titleStyle}>Northern Hemisphere</h1>
				<Table {...option} data={data.items} onOptionChange={onOptionChange} />
			</Container>
		</section>
	);
}

const style = {
	marginTop: '2rem'
};

const titleStyle = {
	marginBottom: '1rem'
};

export default ItemTable;
