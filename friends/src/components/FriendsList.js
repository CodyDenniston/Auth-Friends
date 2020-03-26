import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
	state = {
		friendsList: []
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axiosWithAuth()
			.get('/api/friends')
			.then(res => {
				console.log(res);
				this.setState({});
			});
	};

	render() {
		return <></>;
	}
}

export default FriendsList;
