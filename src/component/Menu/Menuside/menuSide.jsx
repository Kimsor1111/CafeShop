import { MenuDetail } from "../../../data/Menu";
import Menu from "./submenu";

const menuSide = () => {
  return (
    <>
      {MenuDetail.map(({id, title, submenu }) => (
        <Menu key={id} id={id} title={title} submenu={submenu} menuid={id} />
      ))}
    </>
  );
};

export default menuSide;
