import faker from 'faker';
import md5 from 'md5';

function createUserContext(username) {
  const betaChance = 15; // This is the percentage chance a user will fall into the beta group

  let context = {
    key: username,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    state: faker.address.state(),
    country: 'USA',
    email: `${username}@hotmail.gov`,
    custom: {
      beta: Math.floor(Math.random() * 100) < betaChance ? true : false,
      username: username,
    },
  };

  context.name = context.firstName + ' ' + context.lastName;

  return context;
}

export default createUserContext;
