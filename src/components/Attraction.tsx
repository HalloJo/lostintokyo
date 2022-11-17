const Attraction = ({ ...attraction }) => {
  const { className, title, description, image } = attraction;

  return (
    <div
      className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}
    >
      <div className="relative">
        <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay">
          <div>
            <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">
              {title}
            </h1>
            <p className="lh-title lh-copy-ns mv0 black f6 measure-l">
              {description}
            </p>
          </div>
        </div>
        <img alt="Attraction" src={image} className="db" />
      </div>
    </div>
  );
};

export default Attraction;
