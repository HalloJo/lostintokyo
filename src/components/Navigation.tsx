import { menu } from "../data/menu";

const Navigation = () => {
  return (
    <nav className="w-100 w-100-m w-100-l pt3 pt4-ns mb4 mb0-ns">
      <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
        {menu.map((item) => {
          const { className, children, href, logo } = item;

          return (
            <li className={`mh2-ns f6 f4-l tc ${className}`} key={children}>
              <a className="white no-underline" href={href}>
                {children}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
