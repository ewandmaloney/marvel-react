import { useState } from "react";
import "./Header.scss";
import { useLocation, useNavigate } from "react-router";
import { Menu } from "semantic-ui-react";

const Header = () => {
  const navigate = useNavigate();
  const currentPath = useLocation();
  const finalCurrentPath = currentPath.pathname.replace("/", "");
  const [activeItem, setActiveItem] = useState(finalCurrentPath);

  const handleClickItem = (e, { name }) => {
    setActiveItem(name);
    navigate(`/${name}`);
  };

  return (
    <div className="header-menu">
      <Menu secondary>
        <Menu.Item
          name="inicio"
          active={activeItem === "inicio"}
          onClick={handleClickItem}
        />
        <Menu.Item
          name="comics"
          active={activeItem === "comics"}
          onClick={handleClickItem}
        />
        <Menu.Item
          name="series"
          active={activeItem === "series"}
          onClick={handleClickItem}
        />
      </Menu>
    </div>
  );
};

export default Header;
