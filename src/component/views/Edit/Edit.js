import React from 'react';
import styles from './Edit.module.scss'
import PageNav from '../PageNavigation/PageNav';
import Data from '../../../data/users.json';
import {Col} from 'react-flexbox-grid';
import DataHobbies from '../../../data/hobbies.json';

class Edit extends React.Component{


  render(){
    const objectId = window.location.pathname.split('/')[2];
    let parseObject = Data.filter( Data => Data['id'] === objectId);
    const newObj = parseObject[0];
    // console.log(newObj.hobbies);

    // function Hobbies(defaultValue){
    //   let newHobbies = [];
    //   for (let i=0; i<defaultValue.item.length; i++){
    //     let hobbiesName = DataHobbies.filter(hob => hob.id === newObj.hobbies[i]);
    //     newHobbies.push(hobbiesName[0].name);
    //   }
    //   console.log(newHobbies);
    // }

    function Hobbies() {
      let newHobbies = [];
      for (let i=0; i<newObj.hobbies.length; i++){
        const newHobbiesValue = newObj.hobbies[i]
        newHobbies.push(newHobbiesValue);
        return(
          <div>{newHobbiesValue}</div>
        )
      }
      console.log(newHobbies);
    }

    return(
      <div>
        <PageNav></PageNav>
        <div className={styles.table}>
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
            <Hobbies></Hobbies>

            <ul className='list-group'></ul>
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.dateOfBirth} />
          </Col>
          <Col className={'col-sm-1 '}>
            <input defaultValue={newObj.phoneNumber} />
          </Col>
        </div>
      </div>
    )
  }
}
export default Edit;