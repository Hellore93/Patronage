import React from 'react';
import {Col} from 'react-flexbox-grid';
import styles from './PageNav.module.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

class PageNav extends React.Component{

  state = {
    currentSort: 'default'
  }

  onSortChange = () => {
    const {currentSort} = this.state;
    let nextSort;

    if(currentSort === 'down') nextSort = 'up';
    else if (currentSort === 'up') nextSort = 'down';
    else if (currentSort === 'default' || currentSort !== 'up'
    || currentSort !=='down') nextSort= 'up';

    this.setState({
      currentSort: nextSort
    });
    this.props.handleOnSortChange(currentSort);
  }
  onSortAgeChange = () => {
    const {currentSort} = this.state;
    let nextSort;
    if (currentSort === 'ageUp') nextSort = 'ageDown';
    else if (currentSort === 'ageDown') nextSort = 'ageUp';
    else if(currentSort === 'default' || currentSort !== 'ageUp'
    || currentSort !== 'ageDown') nextSort = 'ageUp';

    this.setState({
      currentSort: nextSort
    });
    this.props.handleOnSortChange(currentSort);
  }

  onSortGenderChange = () => {
    const {currentSort} = this.state;
    let nextSort;
    if (currentSort === 'upGender') nextSort = 'downGender';
    else if (currentSort === 'downGender') nextSort = 'upGender';
    else if(currentSort === 'default' || currentSort !== 'upGender'
    || currentSort !== 'downGender') nextSort = 'upGender';

    this.setState({
      currentSort: nextSort
    });
    this.props.handleOnSortChange(currentSort);
  }

  onSortDataChange = () => {
    const {currentSort} = this.state;
    let nextSort;
    if (currentSort === 'upData') nextSort = 'downData';
    else if (currentSort === 'downData') nextSort = 'upData';
    else if(currentSort === 'default' || currentSort !== 'upData'
    || currentSort !== 'downData') nextSort = 'upData';

    this.setState({
      currentSort: nextSort
    });
    this.props.handleOnSortChange(currentSort);
  }
  render(){

    return(
  <div className={styles.table}>
        <Col sm={2}>
          <p>NAME AND SURNAME</p>
          <button onClick={this.onSortChange}>
            <FontAwesomeIcon icon={faSort}></FontAwesomeIcon>
          </button>
        </Col>
        <Col sm={2}>
          <p>E-MAIL</p>
        </Col>
        <Col sm={1}>
          <p>GENDER</p>
          <button onClick={this.onSortGenderChange}>
            <FontAwesomeIcon icon={faSort}></FontAwesomeIcon>
          </button>
        </Col>
        <Col sm={2}>
          <p>ADRESS</p>
        </Col>
        <Col sm={1}>
          <p>AGE</p>
          <button onClick={this.onSortAgeChange}>
            <FontAwesomeIcon icon={faSort}></FontAwesomeIcon>
          </button>
        </Col>
        <Col sm={1}>
          <p>HOBBIES</p>
        </Col>
        <Col sm={1}>
          <p>DATE OF BIRTH</p>
          <button onClick={this.onSortDataChange}>
            <FontAwesomeIcon icon={faSort}></FontAwesomeIcon>
          </button>
        </Col>
        <Col sm={1}>
          <p>PHONE NUMBER</p>
        </Col>
  </div>
)
  }
}

PageNav.propTypes = {
  currentSort: PropTypes.string,
};
export default PageNav;