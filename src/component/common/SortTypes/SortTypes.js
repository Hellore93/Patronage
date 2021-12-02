import PropTypes from 'prop-types';


const SortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.name.toLowerCase() - b.name.toLowerCase(),
		a: 1
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.name.toLowerCase() - a.name.toLowerCase(),
		a: 2
	},
	default: {
		class: 'sort',
		fn: (a, b) => a,
		a:3
	}
};

SortTypes.propTypes = {
  class: PropTypes.string,
  fn: PropTypes.number,
};

export default SortTypes;