import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ItemTable from './ItemTable';

const ITEMS_QUERY = gql`
	{
		items {
			name
			category
			sellPrice
		}
	}
`;

const categories = ['Fish', 'Bug', 'Beach', 'Fossil', 'Fruit', 'Miscellaneous'];

function Items() {
	const { loading, error, data } = useQuery(ITEMS_QUERY);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return categories.map((value, i) => {
		return <ItemTable category={value} items={data.items.filter(item => item.category === value)} />;
	});
}

export default Items;
