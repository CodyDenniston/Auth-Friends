import React from 'react';

export default function FriendsCard(props) {
	return (
		<div className='friendCard'>
			<h1>Name: {props.name}</h1>
			<h3>Age: {props.age}</h3>
			<h3>Email: {props.email}</h3>
		</div>
	);
}
