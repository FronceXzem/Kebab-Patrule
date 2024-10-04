import React from 'react'
import { Link } from "react-router-dom";
// import notfound from "../widgets/ui/404.jpg"

function NotFound() {
  return (
   <div className='notFound'>
    
    <button>
    <Link to={"/"}>Вернуться на главную</Link>
    </button>
    </div>
  )
}

export default NotFound