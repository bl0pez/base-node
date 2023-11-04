const { getUUID, getAge } = require('../plugins');

const buildPerson = ({ name, birthDate }) => {

    return {
        id: getUUID(),
        name,
        birthDate,
        age: getAge(birthDate),
    }
}

const obj = { name: 'John Doe', birthDate: '1996-04-08' }
const john = buildPerson(obj);

console.log(john);