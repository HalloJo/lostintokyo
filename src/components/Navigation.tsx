import { menu } from "../data/menu";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <nav className="w-100 w-100-m w-100-l pt3 pt4-ns mb4 mb0-ns">
      <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
        {menu.map((item) => {
          return <NavigationItem key={item.children} {...item} />;
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
