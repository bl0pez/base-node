// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const { getUUID, getAge } = require('./plugins');
// const getPokemonById = require("./js-foundation/06-promises");
// const getPokemonById = require("./js-foundation/07-async");
// const getPokemonById = require("./js-foundation/08-patron-adaptador-fetch");

const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('holamundo')
logger.error('un error')



// ! Referencia a la función factory y uso.
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John Doe', birthDate: '1996-04-08' };
// const john = makePerson(obj);
// console.log(john);