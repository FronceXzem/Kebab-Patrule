'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Users', [
      {
      email: "1@1",
      password: await bcrypt.hash("123", 10),
      name: "Никита",
      status: "Курьер",
     
  },
  {
    email: "2@2",
    password: await bcrypt.hash("123", 10),
    name: "Мария",
    status: "Покупатель",
    
},
{
  email: "3@3",
  password: await bcrypt.hash("123", 10),
  name: "Дима",
  status: "Покупатель",
  
},
], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
