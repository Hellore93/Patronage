import './App.css';
// import {connect} from 'react-redux';
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Page from './component/views/Page/Page.js';
import MainLayout from './component/layout/MainLayout/MainLayout.js';
import Users from './component/views/Users/Users';
import PropTypes from 'prop-types';

import parseUsers from './utils/parseUsers';

class App extends React.Component{
  static propTypes = {
    users: PropTypes.array,
  }

  constructor(props){
    super(props);
    parseUsers(this.props.members, this.props.setStates);
  }

  componentDidUpdate(prevProps){
    if(prevProps.users !== this.props.users){
      parseUsers(this.props.users, this.props.setStates);
    }
  }

  // eslint-disable-next-line react/require-render-return
  render(){
    return(
    <BrowserRouter>
      <MainLayout>
        <Route exact path='/page' component={Page}/>
        <Route exact path='/users' component={Users}/>
        <Route exact path='/usersParse' component={parseUsers}/>
      </MainLayout>
    </BrowserRouter>
    );
  }
}

// const mapStateToProps = state => ({
//   users: state.trips,
// });



export default App;
