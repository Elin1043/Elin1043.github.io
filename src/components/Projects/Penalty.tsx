import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";
import PenaltyImage from "../../assets/ProjectImages/PenaltyShootout.png";

const images: string[] = [PenaltyImage];
for (let i = 1; i <= 8; i++) {
  images.push(require(`../../assets/ProjectImages/Penalty/Penalty${i}.png`));
}
type PenaltyProps = {};
const Penalty = (props: PenaltyProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Penalty: From The Streets</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Welcome to Penalty: From The Streets! In this game, you can play
            penalty shootouts against the goalkeeper. The game was designed to
            be mobile-first, meaning it is optimized for mobile devices and can
            be played on multiple aspect ratios. Try and score as many times as
            you can to get the highest score possible. But we aware, the
            goalkeeper can suddenly block your shot and reset all your progress!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            In this project, I had the full responsibility to create the code
            base for the game and I took on a lot of general responsibility for
            the project as a whole. A full game loop was set up within the first
            week. After that I took time to ensure quality by improving the code
            wherever I could. It was very successful and that code base is still
            the same towards the end of the project development. Here, I also
            took initiative to suggest a better testing workflow to keep the
            quality high and prevent any game breaking features from getting
            into the main code base. Me and a coworker set up a testing workflow
            to test all major features before they were merged into the main
            code base. This was very successful and we were able to prevent
            major bugs from getting into the main code base.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12} md={2.5}>
          <Typography
            variant="h2"
            sx={{ paddingBottom: "0", textAlign: "start" }}
          >
            Used skills:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>C#</li>
              <li style={{ fontSize: "20px" }}>Unity</li>
              <li style={{ fontSize: "20px" }}>Unity test system</li>
              <li style={{ fontSize: "20px" }}>GitHub</li>
              <li style={{ fontSize: "20px" }}>DevOps</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <VideoPlayer embedId={"fQqcV_lJbxs?si=eXlWinWzrej2Y-so"} />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Typography
            variant="h2"
            sx={{ paddingBottom: "0", textAlign: "start" }}
          >
            My main contributions:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>
                Created the main code base for the game.
              </li>
              <li style={{ fontSize: "20px" }}>
                Implemented the main game loop.
              </li>
              <li style={{ fontSize: "20px" }}>Set up a testing workflow.</li>
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

export default Penalty;
