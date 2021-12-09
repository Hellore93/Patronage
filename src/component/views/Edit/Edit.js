import React from 'react';
import styles from './Edit.module.scss'
import PageNav from '../PageNavigation/PageNav';
import Data from '../../../data/users.json';
import {Col, Row} from 'react-flexbox-grid';
import DataHobbies from '../../../data/hobbies.json';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

class Edit extends React.Component{
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
    this.toggleContainer = React.createRef();

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
  }

  onClickHandler() {
    this.setState(currentState => ({
      isOpen: !currentState.isOpen
    }));
  }
  onClickOutsideHandler(event) {
    if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
      this.setState({ isOpen: false });
    }
  }
  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  render(){
    const objectId = window.location.pathname.split('/')[2];
    let parseObject = Data.filter( Data => Data['id'] === objectId);
    const newObj = parseObject[0];

    function Hobbies(item){
        let hobbiesName = DataHobbies.filter(hob => hob.id === item.item);
      return(
        <input defaultValue = {hobbiesName[0].name} className={styles.hobby}></input>
      )
    }


    return(
      <div>
        <PageNav></PageNav>
        <Row className={styles.table}>
          <Col className={'col-sm-2 '}>
            <input defaultValue={newObj.name + ' ' + newObj.lastName} className={styles.inputCol2}/>
          </Col>
          <Col className={'col-sm-2 '}>
            <input defaultValue={newObj.email} className={styles.inputCol2}/>
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.gender} className={styles.inputCol1}/>
          </Col>
          <Col className={'col-sm-2 '}>
            <input defaultValue={newObj.address} className={styles.inputCol2}/>
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.age} className={styles.inputCol1}/>
          </Col>
          <Col className={'col-sm-1 '}>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle variant="success" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                {newObj.hobbies.map((post) => {
                  return(
                    <div className={styles.hobby} ref={this.toggleContainer}>
                      <button onClick={this.onClickHandler}>
                        <FontAwesomeIcon icon={faExchangeAlt} className={styles.iconHobby}></FontAwesomeIcon>
                      </button>
                      <Hobbies item={post}></Hobbies>
                    </div>
                  )
                })}
                {this.state.isOpen && DataHobbies.map((hobName) => {
                  return(
                    <button>{hobName.name}</button>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.dateOfBirth} className={styles.inputCol1}/>
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.phoneNumber} className={styles.inputCol1}/>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Edit;