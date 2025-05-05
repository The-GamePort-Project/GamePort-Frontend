import ReactPlayer from "react-player";

interface IGameVideoProps {
  videoUrl: string;
}
const GameVideo = ({ videoUrl }: IGameVideoProps) => {
  console.log("GameVideo component rendered with videoUrl:", videoUrl);
  return <ReactPlayer url={videoUrl} controls />;
};
export default GameVideo;
