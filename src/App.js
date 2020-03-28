import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Header from './components/Header';
import ItemTable from './components/ItemTable';
import Footer from './components/Footer';
import './App.css';

const client = new ApolloClient({
	uri: 'http://localhost:4000'
});

class App extends React.Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<Header />
				<ItemTable />
				<Footer />
			</ApolloProvider>
		);
	}
}

export default App;
