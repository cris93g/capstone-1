import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../redux/ducks/itemReducer';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import FileUploader from 'react-firebase-file-uploader';
import { Input, Form, Button } from 'semantic-ui-react';
import { config } from '../../firebase';
import './NewItem.scss';

firebase.initializeApp(config);
const NewItem = () => {
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();
	const [ formData, setFormData ] = useState({});
	const [ username, setUsername ] = useState('');
	const [ avatar, setAvatar ] = useState('');
	const [ isUploading, setIsuploading ] = useState(false);
	const [ progress, setProgress ] = useState(0);
	const [ avatarUrl, setAvatarUrl ] = useState('');
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};
	let handleUploadStart = () => {
		setIsuploading(true);
		setProgress(0);
	};
	let handleProgress = (progress) => setProgress(progress);
	let handleUploadError = (error) => {
		setIsuploading(false);
	};
	let handleUploadSuccess = (filename) => {
		setAvatar(filename);
		setProgress(100);
		setIsuploading(false);
		firebase.storage().ref('images').child(filename).getDownloadURL().then((url) => setAvatarUrl(url));
	};

	const { name, desc, price, category, quantity } = formData;

	useEffect(() => dispatch(addItem()), []);
	return (
		<div>
			<div className="newItemsBanner" />
			<div className="inpWrapper">
				{user.user_id ? (
					<div>
						<Form>
							<Form.Field>
								<h2> name:</h2>
								<Input
									type="text"
									id="name"
									onChange={handleChange}
									value={formData.name}
									focus
									placeholder="Search..."
								/>
							</Form.Field>
							<Form.Field>
								<h2> description:</h2>
								<Input
									type="text"
									id="desc"
									onChange={handleChange}
									value={formData.desc}
									focus
									placeholder="Search..."
								/>
							</Form.Field>
							<Form.Field>
								<h2> price:</h2>
								<Input
									type="text"
									id="price"
									onChange={handleChange}
									value={formData.price}
									focus
									placeholder="Search..."
								/>
							</Form.Field>
							<Form.Field>
								<h2> category:</h2>
								<Input
									type="text"
									id="category"
									onChange={handleChange}
									value={formData.category}
									focus
									placeholder="Search..."
								/>
							</Form.Field>
							<Form.Field>
								<h2> quantity:</h2>
								<Input
									type="text"
									id="quantity"
									onChange={handleChange}
									value={formData.quantity}
									focus
									placeholder="Search..."
								/>
							</Form.Field>
							<FileUploader
								accept="image/*"
								name="avatar"
								randomizeFilename
								storageRef={firebase.storage().ref('images')}
								onUploadStart={handleUploadStart}
								onUploadError={handleUploadError}
								onUploadSuccess={handleUploadSuccess}
								onProgress={handleProgress}
							/>
							<Form.Field>
								<Link to="/main">
									{' '}
									<Button
										onClick={(e) =>
											dispatch(
												addItem(name, desc, price, category, avatarUrl, user.user_id, quantity)
											)}
									>
										add
									</Button>
								</Link>
							</Form.Field>
						</Form>
					</div>
				) : (
					<h2 style={{ display: 'flex', margin: 'auto' }}>please log in to add an item to sell</h2>
				)}
			</div>
		</div>
	);
};

export default NewItem;
