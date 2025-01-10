import { MenuDetail } from "../../../data/Menu";
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
