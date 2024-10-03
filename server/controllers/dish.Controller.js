const DishService = require("../services/Dish.service");


async function getDishesController(req,res) {
    try {
        const dishes = await DishService.getDishes();
        res.status(200).json({dishes})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

    async function createDishController(req,res) {
        
            const {title, price, image} = req.body;
            const userId = res.locals.user.id;
           try { 
            if (title.trim()=== "" || price === "" || image === "") {
                res.status(400).json({ error: "Заполни все поля" });
            } else {
                const dish = await DishService.createDish({title, price, image, userId});
                res.status(201).json({dish});
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

        async function deleteDishController(req,res) {
            const {id} = req.params;
            try {
                const {isDeleted} = await DishService.deleteDish(id);
                if (isDeleted) {
                    res.status(200).json({ message: "Dish deleted" });
                } else {
                    res.status(400).json({ message: "Dish not found" });
                }
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
}

async function updateDishController(req,res) {
    const {id} = req.params;
    const userId = res.locals.user.id;
    const {title, price, image} = req.body;

    try {
        const dish = await DishService.updateDish(id, {title, price, image}, userId);
        if(dish){
            res.status(200).json({dish})
        } else {
            res.status(400).json({ message: "Dish not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    }

    }


module.exports = {
    getDishesController,
    createDishController,
    deleteDishController,
    updateDishController
}