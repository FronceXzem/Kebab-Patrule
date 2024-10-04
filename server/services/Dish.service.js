const {Dish} = require("../db/models");
class DishService {

static async getDishes() {
    try {
     const dishes = await Dish.findAll();
    return dishes;   
    } catch (error) {
        return error
    }
}
    
    static async createDish({title, price, image, userId}) {
        try {
            return await Dish.create({title, price, image, userId})
        } catch (error) {
            return error
        }
}

static async deleteDish(id) {
try {
    const dish = await Dish.findOne({where: {id}});
    if(!dish){
        return {isDeleted: false, message: "Dish not found"}
    } 
    await dish.destroy();
    return {isDeleted: true, message: "Dish deleted"}
} catch (error) {
    return error
}
}

static async updateDish(id, data, userId) {
    try {
        const dish = await Dish.findOne({where: {id, userId}});
        if(!dish){
            return {isDeleted: false, message: "Dish not found"}
        } 
        return await dish.update(data);
    } catch (error) {
        return error
    }
}

static async getDishTitleById(id) {
    try {
      return await Dish.findOne({ where: { id } });
    } catch (error) {
        return error;
    }
  }
}
module.exports = DishService;