import React from 'react';
import styles from './Edit.module.scss'
import PageNav from '../PageNavigation/PageNav';
import Data from '../../../data/users.json';

class Edit extends React.Component{
  render(){
    const objectId = window.location.pathname.split('/')[2];
    let parseObject = Data.filter( Data => Data['id'] === objectId);
    const newObj = parseObject[0];

    return(
      <div>
        <PageNav></PageNav>
        <p>{newObj.name + ' ' +newObj.lastName}</p>
        <input value={newObj.name} type='text'/>
        <input value={newObj.email}></input>
        <input type='text'/>
        <button href="/">Jestem</button>
      </div>
    )
  }
}
export default Edit;