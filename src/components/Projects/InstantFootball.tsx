import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";
import InstantFootballImage from "../../assets/ProjectImages/InstantFootball.png";

const images: string[] = [InstantFootballImage];
for (let i = 1; i <= 5; i++) {
  images.push(
    require(`../../assets/ProjectImages/InstantFootball/InstantFootball${i}.png`)
  );
}
type InstantFootballProps = {};
const InstantFootball = (props: InstantFootballProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Instant Premier Football</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Welcome to Instant Premier Football! In this game, you can bet on
            different outcomes of up to 10 different football games in 4
            different leagues that are generated in real time, providing you
            with endless opportunities to win big. The game was designed to be
            mobile-first, meaning it is optimized for mobile devices and can be
            played on multiple aspect ratios. You'll also have access to a wide
            range of betting options, from predicting the scoreline to guessing
            the number of goals in a match. The game is designed to be intuitive
            and easy to use, so you can focus on enjoying the thrill of the game
            and winning big.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            I was a part of this project from the start and worked within a
            professional game development team to develop this game for the
            WebGL platform for both desktop and mobile users. My main focus was
            on the development of the 3D crowd that plays different animations
            depending on what happens in the game. Since we wanted to support
            old mobile devices, the crowd of thousands of people had to be very
            optimized. I accomplished this by using advanced instancing
            techniques which resulted in a very performant crowd. And as with
            any project, I also performed a lot of testing, bug hunting and bug
            fixing.
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
          <VideoPlayer embedId={"N5Hl0MJFMLQ?si=26qtVHMHVV5AcLxW"} />
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Typography variant="h2" sx={{ paddingBottom: "0" }}>
            My main contributions:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>
                Implemented referees and their behavior
              </li>
              <li style={{ fontSize: "20px" }}>
                Implemented the crowd and their behavior
              </li>
              <li style={{ fontSize: "20px" }}>
                Implemented quality settings for the player and adjusted the
                contents of the game depending on that
              </li>
              <li style={{ fontSize: "20px" }}>
                Implemented a tutorial screen
              </li>
              <li style={{ fontSize: "20px" }}>
                Made Unity tools to help with implementing all the data for the
                football players
              </li>
              <li style={{ fontSize: "20px" }}>
                Optimization of multiple areas to improve performance on low-end
                devices
              </li>
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

export default InstantFootball;
