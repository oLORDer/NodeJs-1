const fs = require('fs').promises;
const path = require('path');

const { nanoid } = require('nanoid');

const contactsPath = path.resolve('./db/contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = await listContacts();
    const result = data.find((el) => el.id === contactId);
    return result || null;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = await listContacts();
    const index = await data.findIndex((el) => el.id === contactId);
    if (index === -1) {
      return null;
    }
    const removedCont = data.splice(index, 1);
    fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
    return removedCont;
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(contact) {
  try {
    const data = await listContacts();
    const newArr = [{ ...contact, id: nanoid() }, ...data];
    fs.writeFile(contactsPath, JSON.stringify(newArr, null, 2));
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
