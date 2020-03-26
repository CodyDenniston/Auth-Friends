import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';

class LoginForm extends React.Component {
	state = {
		credentials: {
			username: '',
			password: ''
		},
		isLoading: false
	};

	handleChange = e => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		});
	};

	login = e => {
		e.preventDefault();
		this.setState({
			isLoading: true
		});
		//make a post request with { username, password} to get the token back
		//store token in local storage
		//if this call is successful we will nav user to the protected route
		// handle errors to show error state on login form
		if (this.state.isLoading === true) {
			return (
				<Loader
					type='Puff'
					color='#00BFFF'
					height={100}
					width={100}
					timeout={3000} //3 secs
				/>
			);
		}
		axiosWithAuth()
			.post('/api/login', this.state.credentials)
			.then(res => {
				console.log(res);
				localStorage.setItem('token', JSON.stringify(res.data.payload));
				this.setState({
					isLoading: false
				});
				this.props.history.push('/protected');
			});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.login}>
					<input
						type='text'
						name='username'
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type='password'
						name='password'
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>
					<button>Log in</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
