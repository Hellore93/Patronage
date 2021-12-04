import PropTypes from 'prop-types';


const SortTypes = {
	up: {
		class: 'sort-up',
		fn: (a, b) => {
			let fa = a.name.toLowerCase(),
        fb = b.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
		}
	},
	down: {
		class: 'sort-down',
		fn: (a, b) => {
			let fa = b.name.toLowerCase(),
        fb = a.name.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
		}
	},
	upGender: {
		class: 'sort-upGender',
		fn: (a, b) => {
			let fa = a.gender.toLowerCase(),
        fb = b.gender.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
		}
	},
	downGender: {
		class: 'sort-downGender',
		fn: (a, b) => {
			let fa = b.gender.toLowerCase(),
        fb = a.gender.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
		}
	},
	default: {
		class: 'sort',
		fn: (a, b) => a,
	},
	ageUp: {
		class: 'sort-ageUp',
		fn: (a,b) => a.age - b.age
	},
	ageDown: {
		class: 'sort-ageDown',
		fn: (a,b) => b.age - a.age
	}
};

SortTypes.propTypes = {
  class: PropTypes.string,
  fn: PropTypes.number,
};

export default SortTypes;