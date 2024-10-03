import React from "react";
import { useState } from "react";
import axiosInstance, { SetAccessToken } from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";
import ModalWindow from "../widgets/ui/Modal/Modal";

function RegPage({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rpassword, setRpassword] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [active, setActive] = useState(false);
  const navigation = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!email || !password || !rpassword || !name || !status) {
      alert("Пожалуйста, заполните все поля!");
    }
    if (password !== rpassword) {
      setErrorMessage("Пароли не совпадают");
      setShowError(true);
    } else {
      setShowError(false);
      const response = await axiosInstance.post("/auth/reg", {
        email,
        password,
        name,
        status,
      });
      if (response.status === 201) {
        setUser(response.data.user);
        SetAccessToken(response.data.accessToken);
        setActive(false)
        // navigation("/");
      } else {
        setErrorMessage("Нету пользователя =(");
      }
    }
  };

  const handlerShowForm = () => {
    setActive(true)
  }
  return (
    <div>
      <button onClick={handlerShowForm}>Регистрация</button>
      <ModalWindow active={active} setActive={setActive}>
      <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
        <label >
          Email 
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label >
          Пароль 
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label >
          Повторите пароль 
          <input
            type="password"
            value={rpassword}
            onChange={(e) => setRpassword(e.target.value)}
          ></input>
        </label>
        <PasswordChecklist
          rules={["minLength", "number", "match"]}
          minLength={5}
          value={password}
          valueAgain={rpassword}
        />
        <label >
          Имя 
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Статус</option>
          <option>Курьер</option>
          <option>Покупатель</option>
        </select>

        <button type="submit">Регистрация</button>
      </form>
      </ModalWindow>
      {showError && (
        <div style={{ border: "1px solid red" }}>{errorMessage}</div>
      )}
    </div>
  );
}

export default RegPage;
