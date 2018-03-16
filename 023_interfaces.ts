interface User {
  email : string;
  firstName : string;
  lastName : string;
}

function profile(user: User) : string {
  return `Welcome, ${user.firstName} ${user.lastName}`;
}

var realUser = {
  email: 'test@test.com',
  firstName: 'Tiffany',
  lastName: 'Hudgens'
};

console.log(profile(realUser));
console.log(realUser.email);