/** @format */

const EventEmitter = require('events');
const customeEmitter = new EventEmitter();
customeEmitter.on('response', (name, id) => {
  console.log(`data received from user ${name} with id of :${id}`);
});
customeEmitter.on('response', () => {
  console.log(`Some other logics here`);
});

customeEmitter.emit('response', 'john', 34);
