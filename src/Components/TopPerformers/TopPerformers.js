import React from 'react';
import fields from '../../Data/performanceFields';
import styles from './topPerformers.module.scss';

const TopPerformers = (props) => {
	const paramValue = props.param;

	let sorted = [];
	const sortPlayers = () => {
		switch (paramValue) {
			case fields.AVG:
				return (sorted = props.filteredPlayers.sort(
					(a, b) => b.AVG - a.AVG
				));
			case fields.HR:
				return (sorted = props.filteredPlayers.sort(
					(a, b) => b.HR - a.HR
				));
			case fields.RBI:
				return (sorted = props.filteredPlayers.sort(
					(a, b) => b.RBI - a.RBI
				));
			default:
				return 0;
		}
	};

	sortPlayers();

	const sliced = sorted.slice(0, 5).map((player) => {
		let value;
		switch (paramValue) {
			case fields.AVG:
				value =
					player.First +
					' ' +
					(Math.abs(player.AVG * 100) / 100).toFixed(3);
				break;
			case fields.HR:
				if (player.HR > 0) {
					value = player.First + ' ' + player.HR;
				}
				break;
			case fields.RBI:
				value = player.First + ' ' + player.RBI;
				break;
		}

		return <div key={player.id}>{value}</div>;
	});

	return (
		<div>
			<div>{paramValue}</div>
			<div>{sliced}</div>
		</div>
	);
};

export default TopPerformers;
