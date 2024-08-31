import { router } from "../../main";
import { Menu as AntdMenu } from "antd";
import { items } from "./constants";
import { Outlet, useLocation } from "react-router-dom";
import "./index.css";

const handleMenuItemClick = (info: { key: string }) => {
  let path = "";
  switch (info.key) {
    case "1":
      path = "/";
      break;
    case "2":
      path = "/group";
      break;
    case "3":
      path = "/chat";
      break;
    case "4":
      path = "/collection";
      break;
    case "5":
      path = "/notification";
      break;
  }
  router.navigate(path);
};

export function Menu() {
  const location = useLocation();

  function getSelectedKeys() {
    if (location.pathname === "/group") {
      return ["2"];
    } else if (location.pathname === "/chat") {
      return ["3"];
    } else if (location.pathname === "/collection") {
      return ["4"];
    } else if (location.pathname === "/notification") {
      return ["5"];
    } else {
      return ["1"];
    }
  }

  return (
    <div id="menu-container">
      <div className="menu-area">
        <AntdMenu
          defaultSelectedKeys={getSelectedKeys()}
          items={items}
          onClick={handleMenuItemClick}
        />
      </div>
      <div className="content-area">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
