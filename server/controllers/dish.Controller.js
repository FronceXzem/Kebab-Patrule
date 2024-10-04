const  transporter  = require("../config/emailConfig");
const DishService = require("../services/Dish.service");
const UserService = require("../services/User.service");


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
            console.log(111111111111)
            const {id} = req.params;
            
            
            const {userId, user} = req.body;
           
            try {
                const dishTitle = await DishService.getDishTitleById(id); 
                const {isDeleted} = await DishService.deleteDish(id);
                if (isDeleted) {
                    const  courier =  await UserService.getUserById(userId);
                    const info = await transporter.sendMail({
                        from: '"Кебаб Патруль" <Mary10@list.ru>', // Тут тот же адрес, что и в конфиге!!!
                        to: `${courier.email}`, // list of receivers
                        subject: `Привет ${courier.name}`, // Subject line
                        text: `У тебя купили блюдо ${dishTitle} по адресу ${user.address}. Вези БЫСТРЕЕ`, // plain text body
                        html: `<b>У тебя купили блюдо ${dishTitle.title} по адресу ${user.address}. Вези БЫСТРЕЕ</b>`, // html body
                      });
                    res.status(200).json({ message: "Dish deleted" });
                } else {
                    res.status(400).json({ message: "Dish not found" });
                }
            } catch (error) {
                console.log(error);
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