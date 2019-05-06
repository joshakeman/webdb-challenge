const knex = require('knex')
const config = require('../knexfile')
const db = knex(config.development)

module.exports = {
    find,
    findById,
    add,
    remove,
    update,
    findHubMessages,
    findMessageById,
    addMessage,
  };

  function find(query) {
    
  
    return rows;
  }