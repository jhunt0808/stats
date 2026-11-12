// react-select menus sit at z-index 1, the same as the data tables' sticky
// header row, which then draws over the open menu. Lift menus above it.
const selectStyles = {
	menu: (base) => ({ ...base, zIndex: 10 }),
};

export default selectStyles;
