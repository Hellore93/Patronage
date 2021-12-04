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
    else if (currentSort === 'up') nextSort = 'down';
    else if (currentSort === 'default') nextSort= 'up';

    this.setState({
      currentSort: nextSort
    });
    this.props.handleOnSortChange(currentSort);
  }
  onSortAgeChange = () => {
    const {currentSort} = this.state;
    let nextSort;
    if(currentSort === 'default') nextSort = 'ageUp';
    else if (currentSort === 'ageUp') nextSort = 'ageDown';
    else if (currentSort === 'ageDown') nextSort = 'ageUp';
    this.setState({
      currentSort: nextSort
    });
    this.props.handleOnSortChange(currentSort);
    console.log(currentSort);
  }
  render(){

    return(
  <div className={styles.table}>
        <Col sm={2}>NAME AND SURNAME
          <button onClick={this.onSortChange}>Name</button>
        </Col>
        <Col sm={2}>E-MAIL</Col>
        <Col sm={1}>GENDER
          <button onClick={this.onSortChange}>Gender</button>
        </Col>
        <Col sm={2}>ADRESS</Col>
        <Col sm={1}>AGE
          <button onClick={this.onSortAgeChange}>Age</button>
        </Col>
        <Col sm={1}>HOBBIES</Col>
        <Col sm={1}>DATE OF BIRTH
          <button onClick={this.onSortChange}>Date of Birth</button>
        </Col>
        <Col sm={1}>PHONE NUMBER</Col>
  </div>
)
  }
}

PageNav.propTypes = {
  currentSort: PropTypes.string,
};
export default PageNav;