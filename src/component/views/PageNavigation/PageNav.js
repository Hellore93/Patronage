import React from 'react';
import {Col} from 'react-flexbox-grid';
import styles from './PageNav.module.scss';
import PropTypes from 'prop-types';

class PageNav extends React.Component{

  state = {
    currentSort: 'default'
  }

  onSortChange = () => {
    const {currentSort} = this.state;
    let nextSort;

    if(currentSort === 'down') nextSort = 'up';
    else if (currentSort === 'up') nextSort = 'default';
    else if (currentSort === 'default') nextSort= 'down';

    this.setState({
      currentSort: nextSort
    });

  }
  render(){
    const {currentSort} = this.state;

    // console.log(currentSort);
    return(
  <div className={styles.table} data={currentSort}>
        <Col sm={2}>NAME AND SURNAME
          <button onClick={this.onSortChange}></button>
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

PageNav.propTypes = {
  currentSort: PropTypes.string,
};
export default PageNav;