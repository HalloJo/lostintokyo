import logoSVG from "../assets/logo.svg";

const NavigationItem = ({ ...item }) => {
  const { className, children, href, logo } = item;

  return (
    <li className={`mh2-ns f6 f4-l tc ${className}`}>
      <a className="white no-underline" href={href}>
        {logo ? (
          <img
            alt="Lost in Tokyo logo"
            src={logoSVG}
            className="db center logo app-logo"
          />
        ) : (
          children
        )}
      </a>
    </li>
  );
};

export default NavigationItem;
