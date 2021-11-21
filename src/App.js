import styles from './styles/App.scss';
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Page from './component/views/Page/Page.js';
import MainLayout from './component/layout/MainLayout/MainLayout.js';



class App extends React.Component{

  render(){
    return(
    <BrowserRouter>
      <MainLayout>
        <Page className={styles.page} />
      </MainLayout>
    </BrowserRouter>
    );
  }
}


export default App;
