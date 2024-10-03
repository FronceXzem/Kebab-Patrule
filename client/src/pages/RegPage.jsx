import React from "react";
import { useState } from "react";
import axiosInstance, { SetAccessToken } from "../axiosInstance";
import { useNavigate } from "react-router-dom";

function RegPage({setUser}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rpassword, setRpassword] = useState("")
  const [name, setName] = useState("")
  const [status, setStatus] = useState("")
  const [showError, setShowError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const navigation = useNavigate();

  const onSubmitHandler = async(e) =>{
    e.preventDefault()
    if (password !== rpassword){
      setErrorMessage("Пароли не совпадают")
      setShowError(true)
    } else {
      setShowError(false);
      const response = await axiosInstance.post("/auth/reg", {
        email,
        password,
        name,
        status
      });
      if (response.status === 201) {
        setUser(response.data.user);
        SetAccessToken(response.data.accessToken);
        navigation("/");
      } else {
        setErrorMessage("Нету пользователя =(");
      }
    }
  }

  return <div>
    <form onSubmit={onSubmitHandler}>
      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
      </label>
      <label>
        Password
        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} ></input>
      </label>
      <label>
        Repeat password
        <input type="password"   value={rpassword} onChange={(e) => setRpassword(e.target.value)}  ></input>
      </label>
      <label>
        Name
        <input type="text"   value={name} onChange={(e) => setName(e.target.value)}  ></input>
      </label>
      {/* <label>
        Status
        <input type="password"   value={status} onChange={(e) => setStatus(e.target.value)}  ></input>
      </label> */}

      <select name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
      <option >Статус</option>
       
          <option >
            Курьер
          </option>
          <option >
            Покупатель
          </option>
       
      </select>

      <button type="submit" >Регистрация</button>
    </form>
    {
      showError && <div style={{border: "1px solid red"}}>{errorMessage}</div>
    }
  </div>;
}

export default RegPage;
