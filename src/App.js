import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Toggle from './components/Toggle';
import Items from './components/Items';
import Footer from './components/Footer';

import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Header />
			<Container>
				<Toggle />
				<Items />
			</Container>
			<Footer />
		</ApolloProvider>
	);
}

export default App;
