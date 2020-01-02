const friends = require('./contacts.json');
const faker = require('faker');

function getContacts() {
    let result = '';
    let counter = 1;
    for (let obj of friends.contacts) {
        result += `<a href="/contact/${counter}">${obj.name}</a>`;
        counter += 1;
    }
    return result;
}

function getContactInfo(number) {
    let obj = friends.contacts[number];
    return `<h1>${obj.name}</h1>
    <h2>${obj.phone}</h2>
    <h3>${obj.email}</h3>`
}

function getFakeContacts(times = 5) {
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
    getFakeContacts,
    getContactInfo
};
