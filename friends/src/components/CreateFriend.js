import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class CreateFriend extends React.Component {
	state = {
		friend: {
			id: this.nextId,
			name: '',
			age: '',
			email: ''
		}
	};

	handleChange = e => {
		this.setState({
			friend: {
				...this.state.friend,
				[e.target.name]: e.target.value
			}
		});
	};

	add = e => {
		e.preventDefault();
		axiosWithAuth()
			.post('/api/friends', this.state.friend)
			.then(res => {
				console.log(res);
			});
	};
	render() {
		return (
			<div>
				<form onSubmit={this.add}>
					<input
						type='text'
						name='name'
						value={this.state.friend.name}
						onChange={this.handleChange}
						placeholder='name'
					/>
					<input
						type='text'
						name='age'
						value={this.state.friend.age}
						onChange={this.handleChange}
						placeholder='age'
					/>
					<input
						type='text'
						name='email'
						value={this.state.friend.email}
						onChange={this.handleChange}
						placeholder='email'
					/>
					<button>Add friend</button>
				</form>
			</div>
		);
	}
}

export default CreateFriend;
