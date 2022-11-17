type HighlightProps = {
  children: string;
  color: string;
};

const Highlight = ({ children, color }: HighlightProps) => {
  return (
    <span className={`relative highlight highlight-${color}`}>
      <span className="relative z-2">{children}</span>
    </span>
  );
};

export default Highlight;
