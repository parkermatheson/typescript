// pretend that this is something that was returned from an API
var realUser = {
  email: 'test@test.com',
  firstName: 'Jordan',
  lastName: 'Hudgens',
  sayHi() {
    return 'Hey there!';
  }
};

console.log(realUser.email);
console.log(realUser.firstName);
console.log(realUser.lastName);
console.log(realUser.sayHi());