import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

///Components
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

///Apollo client setup
const client = new ApolloClient({
	uri: 'https://booklistservergraphql.herokuapp.com/'
});

const App = () => {
	return (
		<ApolloProvider client={client}>
			<div id='main'>
				<h1>My Book Reading List</h1>
				<BookList />
				<AddBook />
			</div>
		</ApolloProvider>
	);
};

export default App;
