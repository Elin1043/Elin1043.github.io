import { Box, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";
import ExoExplorerImage from "../../assets/ProjectImages/ExoExplorer.jpg";

const images: string[] = [ExoExplorerImage];
for (let i = 1; i <= 12; i++) {
  images.push(
    require(`../../assets/ProjectImages/ExoExplorer/ExoExplorer${i}.png`)
  );
}
type ExoExplorerProps = {};
const ExoExplorer = (props: ExoExplorerProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Exo Explorer</Typography>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ margin: "20px" }}>
            Welcome to Exo Explorer, a procedurally generated space exploration
            simulation. This application has been designed to provide an
            immersive and dynamic space exploration experience, with a multitude
            of celestial bodies and ecosystems to explore. Explore a universe of
            procedurally generated planets, each full of unique ecosystems and
            vibrant life. On these diverse worlds, you will encounter a variety
            of creatures, each with their own behavioral patterns.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" sx={{ margin: "20px" }}>
            They seek food and water, and when the conditions are right, they
            reproduce, offering a truly dynamic and immersive exploration
            experience. One of the key features of Exo Explorer is its
            deterministic design. With a particular seed, the same solar system
            is generated every time, allowing you to revisit your favorite
            systems and even share them with others. So, embark on your journey
            through the stars with Exo Explorer and witness the grandeur of the
            cosmos at your fingertips.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={2.5}>
          <Typography variant="h2" sx={{ paddingBottom: "0" }}>
            Used skills:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>Unity</li>
              <li style={{ fontSize: "20px" }}>C#</li>
              <li style={{ fontSize: "20px" }}>GitHub</li>
              <li style={{ fontSize: "20px" }}>Profiling</li>
              <li style={{ fontSize: "20px" }}>Optimization</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <VideoPlayer embedId={"dVtItZSd-88?si=c1yXwt692l43pUm_"} />
        </Grid>
        <Grid item xs={2.5}>
          <Typography variant="h2" sx={{ paddingBottom: "0" }}>
            Some techniques used:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>
                Procedural Content Generation
              </li>
              <li style={{ fontSize: "20px" }}>Procedural Noise Generation</li>
              <li style={{ fontSize: "20px" }}>Deterministic Generation</li>
              <li style={{ fontSize: "20px" }}>Marching Cubes</li>
              <li style={{ fontSize: "20px" }}>Chunk Culling</li>
            </ul>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ paddingBottom: "50px" }}>
        <ImageListDisplay imageList={images}></ImageListDisplay>
      </Box>
    </Box>
  );
};

export default ExoExplorer;
