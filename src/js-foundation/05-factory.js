const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')

const buildPerson = ({ name, birthDate }) => {

    return {
        id: uuidv4(),
        name,
        birthDate,
        age: getAge(birthDate),
    }
}

const obj = { name: 'John Doe', birthDate: '1996-04-08' }
const john = buildPerson(obj);

console.log(john);