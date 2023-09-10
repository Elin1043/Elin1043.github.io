import { Box, Theme, useMediaQuery } from "@mui/material";

type VideoPlayerProps = {
  embedId: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const { embedId } = props;
  const isSmScreen = useMediaQuery((responsiveTheme: Theme) =>
    responsiveTheme.breakpoints.down("sm")
  );
  return (
    <Box>
      <iframe
        width={isSmScreen ? "300px" : "700px"}
        height={isSmScreen ? "169px" : "394px"}
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
