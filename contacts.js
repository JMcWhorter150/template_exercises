const friends = require('./contacts.json');

function getContacts() {
    let result = '';
    for (let obj of friends.contacts) {
        result += `<h1>${obj.name}</h1>\n<h2>${obj.phone}, ${obj.email}</h2>\n`;
    }
    return result;
}

// console.log(getContacts());

module.exports = {
    getContacts
};
