import React from 'react';

// Right-hand slide-out panel. Replaces react-sliding-side-panel, which relies
// on findDOMNode (removed in React 19). Styled in src/scss/sliding-panel.scss.
const SlidingPanel = ({ isOpen, size, backdropClicked, children }) => (
	<div
		className={`sliding-panel-container${isOpen ? ' active' : ''}`}
		aria-hidden={!isOpen}
	>
		<div className='glass' onClick={backdropClicked} />
		<div className='panel' style={{ width: `${size}vw` }}>
			{children}
		</div>
	</div>
);

export default SlidingPanel;
