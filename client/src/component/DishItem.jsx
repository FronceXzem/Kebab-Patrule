import React, { useState } from 'react'
import axiosInstance from '../axiosInstance';

function DishItem({dish, setDishes, user}) {
    const [isShowUpdate, setIsShowUpdate] = useState(false);
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")  

    const deleteDish = async (id) => {
       
        await axiosInstance.delete(`/dishes/${id}`, {data:{userId: dish.userId, user}});
        setDishes((prev) => prev.filter((el) => el.id !== id))
    }


    const updateDish = async (e) => {
        e.preventDefault();
       const response = await axiosInstance.put(`/dishes/${dish.id}`, {title, price, image});
       if (response.status === 200) {
        setDishes((prev) => prev.map((el) => el.id === response.data.dish.id ? response.data.dish : el))
       }
        setIsShowUpdate(false);
        setTitle("");
        setPrice("");
        setImage("");
    }

  return (
    <div className='cardContainer'>
    <div className='card'>
        <img src={dish.image} alt="img" />
        <h2>{dish.title}</h2>
        <p>Первоначальная цена: {dish.price} рублей</p>
        <p>Цена со скидкой 30%: {Math.round(dish.price * 0.7)} рублей</p>

        {user && user.status === "Курьер" && dish.userId === user.id && (
            <button onClick={() => setIsShowUpdate((prev) => !prev)}>Обновить блюдо</button>
        )}

        {user && user.status === "Покупатель" && (
            <button onClick={() => deleteDish(dish.id)}>Купить</button>) }

            {isShowUpdate && (
                <form onSubmit={updateDish}>
        <label>🥙
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Блюдо'/>
            
          
        </label>
        <label>💰
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Цена'/>
            
          
        </label>
        <label>🌅
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Добавь картинку'/>
  
        </label>
                    <button type="submit">Загрузить обновления</button>
                </form>
            )}
        
    </div>
    </div>
  )
}

export default DishItem