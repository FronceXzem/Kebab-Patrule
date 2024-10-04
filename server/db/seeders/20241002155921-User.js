'use strict';
const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Users', [
      {
      email: "felasso3212@gmail.com",
      password: await bcrypt.hash("123", 10),
      name: "Никита",
      address: "Дворцовый мост, коробка под мостом",
      status: "Курьер",
     
  },
  {
    email: "2@2.ru",
    password: await bcrypt.hash("123", 10),
    name: "Мария",
    address: "Бейкер-стрит, 221б",
    status: "Покупатель",
    
},
{
  email: "3@3.ru",
  password: await bcrypt.hash("123", 10),
  name: "Дима",
  address: "Улица пушкина, дом Колотушкина",
  status: "Покупатель",
  
},
], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
