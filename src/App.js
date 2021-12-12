import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Page from './components/views/Page/Page';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Edit from './components/views/Edit/Edit';



class App extends React.Component{

  render(){
    return(
    <BrowserRouter>
      <MainLayout>
        <Route exact path='/' component={Page} />
        <Route exact path='/edit/:id' component={Edit} />
      </MainLayout>
    </BrowserRouter>
    );
  }
}


export default App;
