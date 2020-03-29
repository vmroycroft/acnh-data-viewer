import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Toggle from './components/Toggle';
import ItemTable from './components/ItemTable';
import Footer from './components/Footer';

import './App.css';

const categories = ['Fish', 'Bugs', 'Deep Sea'];
const client = new ApolloClient({
	uri: 'http://localhost:4000'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Header />
			<Container>
				<Toggle />
				{categories.map((value, i) => {
					return <ItemTable category={value} />;
				})}
			</Container>
			<Footer />
		</ApolloProvider>
	);
}

export default App;
