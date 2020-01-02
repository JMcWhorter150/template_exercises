const faker = require('faker');
const fs = require('fs');

function generateContactsArray(howMany=5) {
    let result = [];
    while(howMany > 0) {
        let name = faker.name.findName();
        let phone = faker.phone.phoneNumber();
        let email = faker.internet.email();
        const newContact = {
            "name": name,
            "phone": phone,
            "email": email
        };
        result.push(newContact);
        howMany -= 1;
    }
    return result;
}
// console.log(generateContactsArray());

function generateContactsObject(contactsArray) {
    const contactsObj = {
        "contacts": contactsArray
    };
    return contactsObj;
}

function writeContactsFile(contactsObj) {
    const contactsAsString = JSON.stringify(contactsObj);
    fs.writeFile('contacts.json', contactsAsString, {flags: 'w'}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Seed data written to file!!!!!");
        }
    });
}

function main() {
    const contactsArray = generateContactsArray();
    const contactsObj = generateContactsObject(contactsArray);
    writeContactsFile(contactsObj);
}

main();
module.exports = {
    generateContactsArray,
    generateContactsObject,
    writeContactsFile
};