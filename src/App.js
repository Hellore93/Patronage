import styles from './styles/App.scss';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Page from './component/views/Page/Page.js';
import MainLayout from './component/layout/MainLayout/MainLayout.js';
import Edit from './component/views/Edit/Edit.js';



class App extends React.Component{

  render(){
    return(
    <BrowserRouter>
      <MainLayout>
        {/* <Page className={styles.page} /> */}
        <Route exact path='/' component={Page} />
        <Route exact path='/editId/:id' component={Edit} />
      </MainLayout>
    </BrowserRouter>
    );
  }
}


export default App;
