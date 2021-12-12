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
      this.setState({ isOpen: true });
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

    const {name, lastName, email, gender, address, age, dateOfBirth, phoneNumber} = parseObject[0]
    const col2Class = 'col-sm-2'
    const col1Class = 'col-sm-1'

    function getPropertyColumn(className, defaultValue){
      return(
        <Col className={className}>
          <input defaultValue={defaultValue} />
        </Col>
      )
    }


    return(
      <>
        <PageNav />
        <Row className={styles.table}>
          {getPropertyColumn(col2Class, name, lastName)}
          {getPropertyColumn(col2Class, email)}
          {getPropertyColumn(col1Class, gender)}
          {getPropertyColumn(col2Class, address)}
          {getPropertyColumn(col1Class, age)}
          <Col className={col1Class}>
            <Dropdown className={styles.dropdown}>
              <Dropdown.Toggle variant="success" id="dropdown-basic" />
              <Dropdown.Menu>
                {newObj.hobbies.map((post) => {
                  return(
                    <div className={styles.hobby} ref={this.toggleContainer}>
                      <button onClick={this.onClickHandler}>
                        <FontAwesomeIcon icon={faExchangeAlt} className={styles.iconHobby}></FontAwesomeIcon>
                      </button>
                      <Hobbies item={post} type='button' />
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
          {getPropertyColumn(col1Class, dateOfBirth)}
          {getPropertyColumn(col1Class, phoneNumber)}
        </Row>
      </>
    )
  }
}
export default Edit;