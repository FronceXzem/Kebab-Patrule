import  { useState } from 'react'
import axiosInstance from '../axiosInstance'

function DishForm({setDishes}) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("") 
    const [search, setSearch] = useState("")   

const onSubmitHandler = async (e) => {
    e.preventDefault();
    const {data} = await axiosInstance.post("/dishes", {title, price, image});
    setDishes((prev) => [...prev, data.dish]);
    setTitle("");
    setPrice("");
    setImage("");
}


  return (
   
    <form onSubmit={onSubmitHandler}>
        <label>🥙
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Блюдо'/>
            
          
        </label>
        <label>💰
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Цена'/>
            
          
        </label>
        <label>🌅
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder='Добавь картинку'/>
  
        </label>
        <button type="submit">Добавить</button>
    </form>
  )
}

export default DishForm