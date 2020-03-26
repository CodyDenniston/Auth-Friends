import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import FriendsList from './components/FriendsList';
import { PrivateRoute } from './components/PrivateRoute';
import CreateFriend from './components/CreateFriend';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<ul>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/protected'>Protected Page</Link>
					</li>
					<li>
						<Link to='/protected/addfriend'>Add Friend!</Link>
					</li>
				</ul>
				<Switch>
					<PrivateRoute exact path='/protected' component={FriendsList} />
					<PrivateRoute
						exact
						path='/protected/addfriend'
						component={CreateFriend}
					/>
					<Route path='/login' component={LoginForm} />
					<Route component={LoginForm} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
