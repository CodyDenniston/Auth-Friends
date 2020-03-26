import React from 'react';
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import FriendsCard from './FriendsCard';

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
				console.log(res.data);
				this.setState({
					friendsList: res.data
				});
			});
	};

	render() {
		return (
			<div>
				{this.state.friendsList.map((friend, index) => (
					<FriendsCard
						key={index}
						name={friend.name}
						age={friend.age}
						email={friend.email}
					/>
				))}
			</div>
		);
	}
}

export default FriendsList;
