import {connect} from 'react-redux';
import Users from './Users';
import {getAllUsers} from '../../../redux/usersRedux';

const mapStateToProps = state => ({
  users: getAllUsers(state),
});

export default connect(mapStateToProps)(Users);