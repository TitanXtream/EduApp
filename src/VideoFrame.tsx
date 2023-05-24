import YouTube, { YouTubeProps } from "react-youtube";

function VideoFrame() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId="bnrwCZyRPz8"
      opts={opts}
      onReady={onPlayerReady}
      iframeClassName="w-full aspect-[16/9]"
    />
  );
}

export default VideoFrame;
