import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";

function Layout({ user, setUser }) {
  const navigation = useNavigate();

  const logoutHandler = async () => {
    const response = await axiosInstance.delete("/auth/log");

    if (response.status === 200) {
      setUser(null);
      SetAccessToken("");
      navigation("/");
    }
  };

  return (
    <>
<nav
  style={{
    width: "100%",
    backgroundColor: "#282c34",
    padding: "5px 0", // Уменьшено значение padding для сокращения высоты
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
  }}
>
  <div style={{ width: "90%", margin: "0 auto" }}>
    <ul
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center", // Центрирование всех элементов по вертикали
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      <li>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          Главная
        </Link>
      </li>
      <li>
        <Link to={"/log"} style={{ textDecoration: "none", color: "white" }}>
          Авторизация
        </Link>
      </li>
      <li>
        <Link to={"/reg"} style={{ textDecoration: "none", color: "white" }}>
          Регистрация
        </Link>
      </li>
      <li>
        <Link to={"/dish"} style={{ textDecoration: "none", color: "white" }}>
          Еда
        </Link>
      </li>
      {user && (
        <li style={{ display: "flex", alignItems: "center" }}>
          <p style={{ margin: 0, marginRight: "10px", color: "white" }}>
            {"Привет, " + user.name}
          </p>
          <button
            type="button"
            onClick={logoutHandler}
            style={{
              backgroundColor: "#ff6347",
              color: "white",
              border: "none",
              padding: "5px 10px", // Уменьшено значение padding для кнопки
              fontSize: "14px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Выйти
          </button>
        </li>
      )}
    </ul>
  </div>
</nav>
      <div style={{ marginTop: "50px" }}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
