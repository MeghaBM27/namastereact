import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";

const useResoMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const convertJson = await data.json();
    setMenuData(convertJson.data);
  };

  return menuData;
};

export default useResoMenu;
