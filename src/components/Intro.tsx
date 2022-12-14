import Highlight from "./Highlight";

const Intro = () => {
  return (
    <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal intro">
      <div className="mb3 mb4-ns">
        <Highlight color="aqua">Lost in Tokyo</Highlight> is a directory of fun
        places to see, play in and <Highlight color="yellow">explore</Highlight>
        , in <Highlight color="blue">Tokyo</Highlight>, Japan.
      </div>
      <div>
        From <Highlight color="blue">museums</Highlight> and{" "}
        <Highlight color="blue">galleries</Highlight>, to{" "}
        <Highlight color="pink">robot restaurants</Highlight> and{" "}
        <Highlight color="pink">kitten cafes</Highlight>, Tokyo is the gift that
        keeps on giving. <Highlight color="yellow">Dattebayo!</Highlight>
      </div>
    </div>
  );
};

export default Intro;
