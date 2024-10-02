'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Dishes', [
      {
        title: "Шаверма",
        price: "150",
        image: "https://lh4.googleusercontent.com/proxy/dw1pXbiis6jcX1bcUd_yvBw4pn6SKcvGcVmT3zk_-WGb0wutGxKm_lJULtf1GP9ave2BCSwE95S5_Ior1khb9ledkex_bimSNfvhNDhKylfAj81DAWVTyEXvBMDwiVa5zxL6JuO0mSq-NonlID6m",
        
    },
    {
      title: "Бургер",
      price: "250",
      image: "https://mcdonaldsmenu.ru/image/cache/catalog/photo/173219067-skandinavskij-burger-600x600.png",
      
  },
  {
    title: "Роллы",
    price: "350",
    image: "https://crazybrothers.ru/wp-content/uploads/Rolly-Filadelfija-s-ogurcom-2-700x467.jpg",
    
},
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Dishes', null, {});
     
  }
};
