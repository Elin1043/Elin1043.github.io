import { Box, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";

type ExoExplorerProps = {};

const images = [
  "https://picsum.photos/id/237/1920/1080",
  "https://picsum.photos/id/200/1920/1080",
  "https://picsum.photos/id/201/1920/1080",
  "https://picsum.photos/id/202/1920/1080",
  "https://picsum.photos/id/203/1920/1080",
  "https://picsum.photos/id/204/1920/1080",
  "https://picsum.photos/id/210/1920/1080",
  "https://picsum.photos/id/206/1920/1080",
];

const ExoExplorer = (props: ExoExplorerProps) => {
  return (
    <Box sx={{ height: "90vh", width: "100%", textAlign: "center" }}>
      <Typography variant="h1">Exo Explorer</Typography>
      <Typography variant="h2">Description...</Typography>
      <VideoPlayer embedId={"dVtItZSd-88?si=c1yXwt692l43pUm_"} />

      <ImageListDisplay imageList={images}></ImageListDisplay>
    </Box>
  );
};

export default ExoExplorer;
