import React from 'react';
import fields from '../../Data/performanceFields';
import styles from './topPerformers.module.scss';

const TopPerformers = (props) => {
	const paramValue = props.param;
	let criteria;
	let sorted = [];
	const sortPlayers = () => {
		switch (paramValue) {
			case fields.AVG:
				if (!props.teamPage) {
					criteria = 'min. 20 AB';
				}
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

	const session = (session) => {
		switch (session) {
			case 'Journey 2':
				return 'J2';
			case 'Scared Hitless - 1':
				return 'SH-1';
			case 'Scared Hitless - 2':
				return 'SH-2';
			case 'Scared Hitless - 3':
				return 'SH-3';
			default:
				return '';
		}
	};

	const hasMinTwentyAB = (player) => {
		switch (paramValue) {
			case fields.AVG:
				return player.AB > 19;
			case fields.HR:
				return player;
			case fields.RBI:
				return player;
			case fields.Hits:
				return player;
			default:
				return 0;
		}
	};

	const sliced = sorted
		.filter(hasMinTwentyAB)
		.slice(0, 5)
		.map((player) => {
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
				<div
					className={styles.leaders}
					key={`${player.id}+${paramValue}`}
				>
					<div>
						{props.teamPage === true ? (
							<div>
								<a
									href={`teams/${player.Session}/${player.id}`}
								>
									{session(player.Session)} - {player.Year}
								</a>
							</div>
						) : (
							<div>
								<a
									href={`/player/${player.PlayerId}/${player.First}-${player.Last}`}
								>
									{player.First} {player.Last}
								</a>{' '}
								<span className={styles.sessionYear}>
									{session(player.Session)} - {player.Year}
								</span>
							</div>
						)}
					</div>
					<div className={styles.value}>{value}</div>
				</div>
			) : null;
		});

	return (
		<div className={styles.topPerformer}>
			<div className={styles.category}>
				{paramValue} {criteria && <span>({criteria})</span>}
			</div>
			{sliced}
		</div>
	);
};

export default TopPerformers;
