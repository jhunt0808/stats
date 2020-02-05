import React, { useState } from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall } from '@fortawesome/pro-duotone-svg-icons/faBaseballBall';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div className={styles.header}>
			<div>Stats</div>
			{/* <div><FontAwesomeIcon icon={faBars} /></div> */}
		</div>
	);
};

export default Header;
