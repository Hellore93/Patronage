import React from 'react';
import PropTypes from 'prop-types';
// import styles from './UsersSummary.module.scss';
import {Col} from 'react-flexbox-grid';

const UsersSummary = ({id, name, lastName}) => (
  <Col lg={4}>
    <div className={`${id}`}>{name}</div>
    <div className={`${id}`}>{lastName}</div>
  </Col>
);

UsersSummary.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  lastName: PropTypes.string,
};

export default UsersSummary;