import React from 'react';
import Data from '../../../data/users.json';
import {Col} from 'react-flexbox-grid';
import styles from './Page.module.scss';
import PageNav from '../PageNavigation/PageNav'
class Page extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch('../../../data/users.json')
      .then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Uwaga: to ważne, żeby obsłużyć błędy tutaj, a
        // nie w bloku catch(), aby nie przetwarzać błędów
        // mających swoje źródło w komponencie.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){
    // console.log(item);
    return(
  <div className={styles.app}>
    <PageNav />
  {Data.map((post, index)  => {
    return(
      <div className={styles.table}>
        <Col className={'col-sm-2 ' + styles.page_containter}>{post.name + post.lastName}</Col>
        <Col className={'col-sm-2 ' + styles.page_container}>{post.email}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.gender}</Col>
        <Col className={'col-sm-2 ' + styles.page_container}>{post.address}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.age}</Col>
        <Col className={'col-sm-1 ' + styles.page_container + ' ' + styles.hobbies}>{post.hobbies}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.dateOfBirth}</Col>
        <Col className={'col-sm-1 ' + styles.page_container}>{post.phoneNumber}</Col>
      </div>
  )
    })}
  </div>
    );
};



}
export default Page;