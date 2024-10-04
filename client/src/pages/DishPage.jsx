import React, { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../axiosInstance'
import DishForm from '../component/DishForm'
import DishItem from '../component/DishItem'

function DishPage({user}) {
    const [dishes, setDishes] = useState([])
    const [search, setSearch] = useState("")
    const filteredDishes = dishes.filter((dish) => dish.title.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredDishes);
console.log(user);
    const loadDishes = async () => {
        const response = await axiosInstance.get("/dishes")
    setDishes(response.data.dishes)
    }

    useEffect(() => {
        loadDishes()
    }, [])


  return (
    <>
    <div className='wrapper'>
        {user && user.status === "Курьер" && <DishForm setDishes={setDishes}/>}
<input type="text" value= {search} onChange={(e) => setSearch(e.target.value)} placeholder='Поиск...'/>
        {filteredDishes && filteredDishes.map((dish) => (
            <DishItem key={dish.id} dish={dish} setDishes={setDishes} user={user}/>
        ))}
    </div>
    </>
  )
}

export default DishPage