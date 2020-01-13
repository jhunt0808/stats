import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import statsData from '../stats';
import columns from '../Columns';
import Totals from './Totals';

class Player extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log(params);
      
        // axios.get(`/api/users/${params.userId}`)
        //   .then(({ data: user }) => {
        //     console.log('user', user);
      
        //     this.setState({ user });
        //   });
      }

	render() {
		return (
			<div className="App">
				<h1>Player Page</h1>
			</div>
		);
	}
}

export default Player;
