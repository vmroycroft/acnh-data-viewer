import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import Search from './components/Search';
import Toggle from './components/Toggle';
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
				<Row className="mt-4">
					<Col>
						<Search />
					</Col>
					<Col>
						<Toggle />
					</Col>
					<Items />
				</Row>
			</Container>
			<Footer />
		</ApolloProvider>
	);
}

export default App;
