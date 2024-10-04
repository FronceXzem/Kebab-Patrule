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
      avatar: "https://static.wikia.nocookie.net/roblox/images/3/30/Pal_Face.png/revision/latest/thumbnail/width/360/height/450?cb=20170214043522",
      status: "Курьер",
     
  },
  {
    email: "2@2.ru",
    password: await bcrypt.hash("123", 10),
    name: "Мария",
    address: "Бейкер-стрит, 221б",
    avatar: "https://t3.rbxcdn.com/99c0827dcc8b17268c743772d4104c09",
    status: "Покупатель",
    
},
{
  email: "3@3.ru",
  password: await bcrypt.hash("123", 10),
  name: "Дима",
  address: "Улица пушкина, дом Колотушкина",
  avatar: "https://tr.rbxcdn.com/30DAY-DynamicHeadCostume-216280C6BF1B5B2F6D344DDC1D26FF94-Png/420/420/DynamicHeadCostume/Png/noFilter",
  status: "Покупатель",
  
},
], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      await queryInterface.bulkDelete('Users', null, {});
     
  }
};
