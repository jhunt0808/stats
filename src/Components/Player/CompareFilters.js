import React from 'react';
import PlayerSelect from './PlayerSelect';
import styles from './filter.module.scss';

const CompareFilters = ({ onSelectFn, clearSelection, removeValue }) => {
	return (
		<div className={styles.filtersWrapper}>
			<PlayerSelect
				onSelectFn={onSelectFn}
				clearSelection={clearSelection}
				removeValue={removeValue}
			/>
		</div>
	);
};

export default CompareFilters;
