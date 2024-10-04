'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
     await queryInterface.bulkInsert('Dishes', [
      {
        title: "Шаверма",
        price: "150",
        image: "https://lh4.googleusercontent.com/proxy/dw1pXbiis6jcX1bcUd_yvBw4pn6SKcvGcVmT3zk_-WGb0wutGxKm_lJULtf1GP9ave2BCSwE95S5_Ior1khb9ledkex_bimSNfvhNDhKylfAj81DAWVTyEXvBMDwiVa5zxL6JuO0mSq-NonlID6m",
        userId: 1
    },
    {
      title: "Бургер",
      price: "250",
      image: "https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-and-fried-bacon_2829-5398.jpg?size=626&ext=jpg&ga=GA1.1.1473966501.1728037870&semt=ais_hybrid",
      userId: 1
  },
  {
    title: "Роллы",
    price: "350",
    image: "https://crazybrothers.ru/wp-content/uploads/Rolly-Filadelfija-s-ogurcom-2-700x467.jpg",
    userId: 1
},
{
  title: "Лазанья",
  price: "600",
  image: "https://img.freepik.com/free-photo/delicious-pasta-on-plate_23-2150690693.jpg?size=626&ext=jpg",
  userId: 1
},
{
  title: "Шашлычок",
  price: "500",
  image: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-of-sweet-peppers-and-dill_2829-18813.jpg?size=626&ext=jpg&ga=GA1.1.1473966501.1728037870&semt=ais_hybrid",
  userId: 1
},
{
  title: "Борщ",
  price: "470",
  image: "https://img.freepik.com/premium-photo/top-view-traditional-ukrainian-borsch-rustic-bowl-garnished-with-fresh-dill-bread_155789-3626.jpg?ga=GA1.1.1473966501.1728037870&semt=ais_hybrid",
  userId: 1
},
{
  title: "Кура-гриль",
  price: "800",
  image: "https://img.freepik.com/free-photo/top-view-cooked-chicken-spiced-up-with-potatoes-dark-surface_179666-44393.jpg?ga=GA1.1.1473966501.1728037870&semt=ais_hybrid",
  userId: 1
},
{
  title: "Пироженка",
  price: "300",
  image: "https://img.freepik.com/free-photo/beautiful-delicious-dessert-strawberry-cream-fruit_23-2148718722.jpg?ga=GA1.1.1473966501.1728037870&semt=ais_hybrid",
  userId: 1
},
{
  title: "Хачапури",
  price: "399",
  image: "https://img.freepik.com/free-photo/top-view-delicious-egg-bread-baked-rustic-grey-space_140725-75589.jpg?ga=GA1.1.1473966501.1728037870&semt=ais_hybrid",
  userId: 1
},

    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Dishes', null, {});
     
  }
};
