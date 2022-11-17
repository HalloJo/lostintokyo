type HighlightProps = {
  children: any;
};

const Highlight = ({ children }: HighlightProps) => {
  return (
    <span className="relative highlight highlight-blue">
      <span className="relative z-2">{children}</span>
    </span>
  );
};

export default Highlight;
