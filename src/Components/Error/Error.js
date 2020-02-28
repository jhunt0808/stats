import React from 'react';
import styles from './error.module.scss';

const Error = () => {
	return (
		<div className={styles.errorPage}>
			<h1>Strike 3 ... you're out.</h1>
			<h3>
				Keep your eye on the ball. The page you're looking for isn't
				here.
			</h3>
			<div>
				Go ahead, touch <a href='/'>Home Plate</a>
			</div>
		</div>
	);
};

export default Error;
