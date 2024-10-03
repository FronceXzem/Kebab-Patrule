import React, { useEffect } from 'react'
import { useState } from 'react'
import axiosInstance from '../axiosInstance'
import DishForm from '../component/DishForm'
import DishItem from '../component/DishItem'

function DishPage({user}) {
    const [dishes, setDishes] = useState([])
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
    <div>
        {user && user.status === "Курьер" && <DishForm setDishes={setDishes}/>}

        {dishes && dishes.map((dish) => (
            <DishItem key={dish.id} dish={dish} setDishes={setDishes} user={user}/>
        ))}
    </div>
    </>
  )
}

export default DishPage