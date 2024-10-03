import React from 'react'
import { Link } from "react-router-dom";

function NotFound() {
  return (
   <div>
    <img src="https://i-a.d-cd.net/Y6ytL97oZwpN9gqoCCB3pbXo2iI-1920.jpg" alt="notfound" />
    <button>
    <Link to={"/"}>Вернуться на главную</Link>
    </button>
    </div>
  )
}

export default NotFound