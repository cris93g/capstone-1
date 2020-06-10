import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../redux/ducks/userReducer';
import './Auth.scss';
const Auth = () => {
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getUser()), []);
	const { REACT_APP_LOGIN, REACT_APP_LOGOUT } = process.env;

	return (
		<div>
			{user.user_pic ? (
				<div >
					<img style={{ width: '50px', height: '50px', borderRadius: '25px' }} src={user.user_pic} />

					<a href={REACT_APP_LOGOUT}>Logout</a>
				</div>
			) : (
				<div>
					<a href={REACT_APP_LOGIN}>Login</a>
				</div>
			)}
		</div>
	);
};

export default Auth;
