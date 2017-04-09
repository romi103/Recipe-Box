var { EventEmitter } = require('fbemitter');
var emitter = new EventEmitter();

// emitter.addListener('change', (arg) => {
//     console.log(arg);
// });

module.exports = emitter;