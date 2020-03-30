import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Items from './components/Items';
import Footer from './components/Footer';

import './App.css';

const client = new ApolloClient({
	uri: process.env.REACT_APP_GQL_URL
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Header />
			<Container>
				<Items />
			</Container>
			<Footer />
		</ApolloProvider>
	);
}

export default App;
