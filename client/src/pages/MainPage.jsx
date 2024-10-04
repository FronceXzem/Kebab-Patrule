import React from 'react'
import { Link } from "react-router-dom";
import main from "../widgets/ui/main.jpg"

function MainPage() {
  return (
   <div style={{backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius:'10px', padding:'10px'}}>
    <h1>Если ты голодный и заказа нет, наш "Kebab Patrol"- вот тебе ответ! </h1>
    <img src={main}  style={{width:'40%', height:'40%'}}/>
    
    </div>
  )
}

export default MainPage