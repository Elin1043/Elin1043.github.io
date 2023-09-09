import { Box, Typography } from "@mui/material";

type VideoPlayerProps = {
  embedId: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const { embedId } = props;
  return (
    <Box>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Box>
  );
};

export default VideoPlayer;
