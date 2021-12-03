import PropTypes from 'prop-types';


const SortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => a.age - b.age,
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => b.name.toLowerCase() - a.name.toLowerCase(),
	},
	default: {
		class: 'sort',
		fn: (a, b) => b.age - a.age,
	}
};

SortTypes.propTypes = {
  class: PropTypes.string,
  fn: PropTypes.number,
};

export default SortTypes;