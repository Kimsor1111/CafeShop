import { MenuDetail } from "../../../data/Drink";
import Menu from "./submenu";

const menuSide = () => {
  return (
    <>
      {MenuDetail.map(({ title, submenu }, index) => (
        <Menu key={index} title={title} submenu={submenu} menuid={index + 1} />
      ))}
    </>
  );
};

export default menuSide;
