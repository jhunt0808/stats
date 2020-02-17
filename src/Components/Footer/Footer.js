import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerText}>Created by Joshua Hunt</div>
			<div>
				<a
					href='http://www.devwithapassion.com'
					className={styles.footerLink}
				>
					devwithapassion.com
				</a>
			</div>
		</div>
	);
};

export default Footer;
