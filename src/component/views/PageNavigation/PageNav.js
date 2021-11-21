import React from 'react';
import {Col} from 'react-flexbox-grid';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <div className={styles.table}>
        <Col sm={2}>NAME AND SURNAME</Col>
        <Col sm={2}>E-MAIL</Col>
        <Col sm={1}>GENDER</Col>
        <Col sm={2}>ADRESS</Col>
        <Col sm={1}>AGE</Col>
        <Col sm={1}>HOBBIES</Col>
        <Col sm={1}>DATEOFBIRTH</Col>
        <Col sm={1}>PHONENUMBER</Col>
  </div>
);

export default PageNav;