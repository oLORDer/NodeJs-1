const argv = require('yargs').argv;
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts');

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts();
      break;

    case 'get':
      getContactById(id);
      break;

    case 'add':
      console.log('name email phone', name, email, phone);
      break;

    case 'remove':
      console.log('id', id);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction({
  action: 'list',
  id: '2',
  name: 'lol',
  email: 'sobaka@gmail.com',
  phone: '+372-555-22-333',
});
