import React, { useState } from 'react';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall } from '@fortawesome/pro-duotone-svg-icons/faBaseballBall';
import { faBars, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import SlidingPanel from 'react-sliding-side-panel';

const Header = () => {
	const [openPanel, setOpenPanel] = useState(false);

	let intViewportWidth = window.innerWidth;
	let size = 50;

	if (intViewportWidth > 1200) {
		size = 17;
	} else if (intViewportWidth > 500) {
		size = 30;
	}

	return (
		<>
			<div className={styles.header}>
				<div className={styles.logo}>
					<a href='/'>Stats</a>
				</div>
				<div className={styles.menuIcon}>
					<FontAwesomeIcon
						icon={faBars}
						onClick={() => setOpenPanel(true)}
					/>
				</div>
			</div>
			<SlidingPanel
				type={'right'}
				isOpen={openPanel}
				size={size}
				backdropClicked={() => setOpenPanel(false)}
			>
				<div>
					<div className='panelHeading'>
						<FontAwesomeIcon
							icon={faTimesCircle}
							className='closeIcon'
							onClick={() => setOpenPanel(false)}
						/>
					</div>
					<div className='panelContent'>
						<a href='/teams'>Team Stats</a>
						<a href='/compare'>Compare Players</a>
						<a href='/'>All Players Stats</a>
					</div>
				</div>
			</SlidingPanel>
		</>
	);
};

export default Header;