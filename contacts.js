const fs = require('fs').promises;
const path = require('path');

const { nanoid } = require('nanoid');

const contactsPath = path.resolve('./db/contacts.json');

function listContacts() {
  fs.readFile(contactsPath)
    .then((data) => console.log(data.toString()))
    .catch((err) => console.log(err.message));
}

function getContactById(contactId) {
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((data) => console.log(data.filter((el) => el.id === contactId)))
    .catch((err) => console.log(err.message));
}

function removeContact(contactId) {
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((data) => {
      const index = data.findIndex((el) => el.id === contactId);
      data.splice(index, 1);
      fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    })
    .catch((err) => console.log(err.message));
}

function addContact(contact) {
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((data) => {
      const newArr = [{ ...contact, id: nanoid() }, ...data];
      fs.writeFile(contactsPath, JSON.stringify(newArr, null, 2));
    })
    .catch((err) => console.log(err.message));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
