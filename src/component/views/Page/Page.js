import React from 'react';
import Data from '../../../data/users.json';
import {Col} from 'react-flexbox-grid';
import styles from './Page.module.scss';
import PageNav from '../PageNavigation/PageNav';
import DataHobbies from '../../../data/hobbies.json';
import PropTypes from 'prop-types';
import SortTypes from '../../common/SortTypes/SortTypes'
class Page extends React.Component{
  render(){

    function Hobbies(item){
      let newHobbies = [];
      for(let i=0; i<item.item.length; i++){
        let hobbiesName = DataHobbies.filter(hob => hob.id === item.item[i]);
        newHobbies.push(hobbiesName[0].name);
      }
      return(
        <p>{newHobbies.join(' ')}</p>
      )
    }

  let currentSort = PageNav.currentSort;
  // const fn=SortTypes[currentSort];
  console.log(currentSort);

    return(
  <div className={styles.app}>
    <PageNav/>
  {Data.sort(SortTypes[currentSort]).map((post)  => {
    return(
      <div className={styles.table} key={post.id}>
        <Col className={'col-sm-2 ' + styles.page_container }>{post.name + post.lastName}</Col>
        <Col className={'col-sm-2 ' + styles.page_container + ' ' + styles.new}>{post.email}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.gender}</Col>
        <Col className={'col-sm-2 ' + styles.page_container}>{post.address}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.age}</Col>
        <Col className={'col-sm-1 ' + styles.page_container + ' ' + styles.hobbies}>
        <Hobbies item={post.hobbies}></Hobbies>
        </Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.dateOfBirth}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.phoneNumber}</Col>
      </div>
  )
    })}
  </div>
    );
};

}
Page.propTypes = {
  hobbies: PropTypes.string,
  hobby: PropTypes.arrayOf,
  name: PropTypes.string,
  hobbiesName: PropTypes.string,
  fn: PropTypes.number,
};
Page.defaultProps = {
  hobby:[],
};
export default Page;