import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";
import RetroFootballImage from "../../assets/ProjectImages/RetroFootball.png";

const images: string[] = [RetroFootballImage];
for (let i = 1; i <= 4; i++) {
  images.push(
    require(`../../assets/ProjectImages/RetroFootball/RetroFootball${i}.png`)
  );
}
type RetroFootballProps = {};
const RetroFootball = (props: RetroFootballProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Retro Football</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Welcome to Retro Football! A football simulation game where the
            player can predict the outcomes of ten different football matches.
            There are many options to choose from and after making the
            predictions, the player can watch the ten matches play out
            simultaneously. The matches are completely simulated and the player
            can see the results after all matches have been completed.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            I joined the project in the final stages of development during the
            summer of 2022, where I was tasked with implementing the referees
            and their behavior. After completing the task, I jumped in to help
            finish the game for release. I hunted and fixed bugs, did final
            testing and polishing, and implemented optimizations to improve the
            performance of the game.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12} md={2.5}>
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
        <Grid item xs={12} md={7}>
          <VideoPlayer embedId={"fSvCdGOQOSE?si=-d7VRaujfct_573S"} />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Typography variant="h2" sx={{ paddingBottom: "0" }}>
            My contributions:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>
                Implemented referees and their behavior
              </li>
              <li style={{ fontSize: "20px" }}>Hunted and fixed bugs</li>
              <li style={{ fontSize: "20px" }}>Final testing and polishing</li>
              <li style={{ fontSize: "20px" }}>Optimizations</li>
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

export default RetroFootball;
