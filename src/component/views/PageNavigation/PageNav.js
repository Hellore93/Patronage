import React, {useState} from 'react';
import {Col} from 'react-flexbox-grid';
import styles from './PageNav.module.scss';
import SortButton from '../../common/Button/SortButton'

class PageNav extends React.Component{
  render(){

    return(
  <div className={styles.table}>
        <Col sm={2}>NAME AND SURNAME
          <SortButton onClick='App()'></SortButton>
        </Col>
        <Col sm={2}>E-MAIL</Col>
        <Col sm={1}>GENDER</Col>
        <Col sm={2}>ADRESS</Col>
        <Col sm={1}>AGE</Col>
        <Col sm={1}>HOBBIES</Col>
        <Col sm={1}>DATE OF BIRTH</Col>
        <Col sm={1}>PHONE NUMBER</Col>
  </div>
)

  }
}
export default PageNav;