import users from '../data/users.json';

const parseUsers = (user) => {
  const newState = {
    users: {},

    // lastName: {},
    // email: {},
    // age: {},
    // gender: {},
    // phoneNumber: {},
    // address: {},
    // dateOfBirth: {},
    // id: {}
  };

  for(let user of users){
  /* add name to newState.name */
  if(typeof(newState.users[user.name]) === 'undefined'){
    const userDetails = users.filter(item => item.name === user.name)[0] || {};
    newState.users[user.name] = JSON.parse(JSON.stringify(userDetails));
    newState.users[user.name].users = [user.name];

  } else {
    newState.name[user.name].users.push(user.id);
  }

  // /* add lastName to newState.lastName*/
  // for(let lastN of user.lastName){
  //   if(typeof(newState.lastName[lastN]) === 'undefined'){
  //     newState.lastName[lastN] = {users: [user.lastName]};
  //   } else {
  //     newState.lastName[lastN].users.push(user.id);
  //   }
  // }
}

console.log(newState.users);
// console.log(newState.lastName);
// setStates(newState);
};


  export default parseUsers;

// const parseUsers = usersData ;

// console.log(parseUsers);

// export default parseUsers