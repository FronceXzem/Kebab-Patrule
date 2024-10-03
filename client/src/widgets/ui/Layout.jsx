import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";


function Layout( {user, setUser} ) {


  const logoutHandler = async () => {
    const response = await axiosInstance.delete("/auth/log");

    if (response.status === 200) {
      setUser(null);
      SetAccessToken("")
    }
  };

  return (
    <>
      <nav>
        <div>
          <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
            <li>
              <Link to={"/"}>Главная</Link>
            </li>

            <li>
              <Link to={"/log"}>Авторизация</Link>
            </li>
            <li>
              <Link to={"/reg"}>Регистрация</Link>
            </li>
            <li>
              <Link to={"/dish"}>Еда</Link>
            </li>
            <li>
              {user && (
                <>
                  {"Привет, " + user.name}
                  <button type="button" onClick={logoutHandler}>
                    Выйти
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
