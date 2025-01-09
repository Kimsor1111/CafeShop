import { MenuDetail } from "../../../data/Drink";
import Menu from "./menu";

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
