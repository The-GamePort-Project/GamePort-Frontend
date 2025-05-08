import ReactPlayer from "react-player";

interface IGameVideoProps {
  videoUrl: string;
  width?: string;
  height?: string;
}

const GameVideo = ({
  videoUrl,
  width = "300px",
  height = "170px",
}: IGameVideoProps) => {
  return (
    <div style={{ width, height }}>
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </div>
  );
};

export default GameVideo;
