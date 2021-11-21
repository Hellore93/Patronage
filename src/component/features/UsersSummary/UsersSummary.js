import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';


const UsersSummary = ({name, lastName}) => (

<Col xs={12}>
  <Row>
    <h3> {name} Tekst</h3>
    <h4> {lastName} </h4>
  </Row>
</Col>
);


UsersSummary.propTypes = {
  name: PropTypes.string,
  lasName: PropTypes.string
};
export default UsersSummary;