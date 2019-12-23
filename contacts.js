const friends = require('./contacts.json');
const faker = require('faker');

function getContacts() {
    let result = '';
    for (let obj of friends.contacts) {
        result += `<h1>${obj.name}</h1>\n<h2>${obj.phone}, ${obj.email}</h2>\n`;
    }
    return result;
}

function getContacts2(times = 5) {
    let result = '';
    let count = 0;
    while (count < times) {
        let contactCard = faker.helpers.createCard();
        result += `<h1>${contactCard.name}</h1>\n<h2>${contactCard.phone}, ${contactCard.email}</h2>\n`;
        count += 1;
    }
    return result;
}

// console.log(getContacts());
// console.log(getContacts2());
// console.log(faker.helpers.createCard());

module.exports = {
    getContacts,
    getContacts2
};
