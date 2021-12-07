import React from 'react';
import styles from './Edit.module.scss'
import PageNav from '../PageNavigation/PageNav';
import Data from '../../../data/users.json';
import {Col, Row} from 'react-flexbox-grid';
import DataHobbies from '../../../data/hobbies.json';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

class Edit extends React.Component{


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
            <input defaultValue={newObj.name + ' ' + newObj.lastName} />
          </Col>
          <Col className={'col-sm-2 '}>
            <input defaultValue={newObj.email} />
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.gender} />
          </Col>
          <Col className={'col-sm-2 '}>
            <input defaultValue={newObj.address} />
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.age} />
          </Col>
          <Col className={'col-sm-1 '}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                {newObj.hobbies.map((post) => {
                  return(
                    <Hobbies item={post}></Hobbies>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.dateOfBirth} />
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.phoneNumber} />
          </Col>
        </Row>
      </div>
    )
  }
}
export default Edit;