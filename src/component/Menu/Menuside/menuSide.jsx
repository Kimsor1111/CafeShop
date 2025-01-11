import { MenuDetail } from "../../../data/Menu";
import Menu from "./submenu";

const menuSide = () => {
  return (
    <>
      {MenuDetail.map(({menuid, title, submenu }) => (
        <Menu key={menuid} menuid={menuid} title={title} submenu={submenu} />
      ))}
    </>
  );
};

export default menuSide;
