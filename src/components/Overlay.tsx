type OverlayProps = {
  showInfo: boolean;
  title: string;
  description: string;
};

const Overlay = ({ showInfo, title, description }: OverlayProps) => {
  return (
    <div
      className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
      style={{ transform: showInfo ? "none" : "translateY(-100%)" }}
    >
      <div>
        <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">
          {title}
        </h1>
        <p className="lh-title lh-copy-ns mv0 black f6 measure-l">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Overlay;
