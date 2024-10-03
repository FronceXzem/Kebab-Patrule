import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import axiosInstance, { SetAccessToken } from "../../axiosInstance";
import { useNavigate } from "react-router-dom";


function Layout( {user, setUser} ) {
  const navigation = useNavigate();

  const logoutHandler = async () => {
    const response = await axiosInstance.delete("/auth/log");
    

    if (response.status === 200) {
      setUser(null);
      SetAccessToken("")
      navigation("/");
    }
  };

  return (
    <>
      <nav>
        <div>
        
          <ul  >
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
