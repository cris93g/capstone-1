import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
const Search = () => {
	const [ input, setInput ] = useState('');
	let onChangeHandler = (e) => {
		setInput(e.target.value);
	};
	return (
		<div>
			<Input style={{ marginLeft: '100px' }} onChange={(e) => onChangeHandler(e)} placeholder="search items" />
			<Link to={`/search/${input}`}>
				{' '}
				<Button content="search" />
			</Link>
		</div>
	);
};
export default Search;
