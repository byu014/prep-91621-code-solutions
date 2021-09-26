const person = {
  firstName: 'SpongeBob',
  lastName: 'SquarePants',
  hobby: 'Jellyfishing'
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s full name is: ', fullName);
person.job = 'fry cook';
console.log('The person\'s current job is: ', person.job);
person.previousJob = 'Unemployed';
console.log('The person\'s previous job was: ', person.previousJob);
console.log(person);
