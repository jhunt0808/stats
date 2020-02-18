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
			case fields.Hits:
				return (sorted = props.filteredPlayers.sort(
					(a, b) => b.Hits - a.Hits
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
				value = (Math.abs(player.AVG * 100) / 100).toFixed(3);
				break;
			case fields.HR:
				if (player.HR > 0) {
					value = player.HR;
				}
				break;
			case fields.RBI:
				value = player.RBI;
				break;
			case fields.Hits:
				value = player.Hits;
				break;
			default:
				return 0;
		}

		return value > 0 ? (
			<div className={styles.leaders} key={`${player.id}+${paramValue}`}>
				<div className={styles.player}>
					<a
						href={`/${player.PlayerId}/${player.First}-${player.Last}`}
					>
						{player.First} {player.Last}
					</a>
				</div>
				<div className={styles.value}>{value}</div>
			</div>
		) : null;
	});

	return (
		<div className={styles.topPerformer}>
			<div className={styles.category}>{paramValue}</div>
			{sliced}
		</div>
	);
};

export default TopPerformers;
