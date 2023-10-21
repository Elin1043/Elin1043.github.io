import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";
import JackpotImage from "../../assets/ProjectImages/Jackpot15.png";

const images: string[] = [JackpotImage];
for (let i = 1; i <= 8; i++) {
  images.push(require(`../../assets/ProjectImages/Jackpot/Jackpot${i}.png`));
}
type JackpotProps = {};
const Jackpot = (props: JackpotProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Jackpot 15</Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Welcome to Jackpot 15! In this game, you can predict different
            outcomes of real sport events. The game was designed to be
            mobile-first, meaning it is optimized for mobile devices and can be
            played on multiple aspect ratios. This is very simple game where you
            can predict the outcomes and then see the results of the events and
            your predictions. It is designed to be intuitive and easy to use, so
            you can focus on enjoying the thrill of the game.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            I was a part of this project from the start and worked with
            front-end and back-end developers to create this application for the
            web. My main focus was on the development of the front-end of the
            application and most of it was done by me. It was developed for
            mobile first but it supports different aspect ratios. I also worked
            on the back-end, mostly on the communication between the front-end
            and the back-end. And as with any project, I also performed a lot of
            testing, bug hunting and bug fixing.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{ paddingBottom: "0", textAlign: "start" }}
          >
            Used skills:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>React</li>
              <li style={{ fontSize: "20px" }}>TypeScript</li>
              <li style={{ fontSize: "20px" }}>C#</li>
              <li style={{ fontSize: "20px" }}>HTML</li>
              <li style={{ fontSize: "20px" }}>CSS</li>
              <li style={{ fontSize: "20px" }}>Material Design</li>
              <li style={{ fontSize: "20px" }}>GitHub and DevOps</li>
            </ul>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{ paddingBottom: "0", textAlign: "start" }}
          >
            My main contributions:
          </Typography>
          <Box sx={{ display: "flex", textAlign: "start" }}>
            <ul>
              <li style={{ fontSize: "20px" }}>
                Implemented the base front-end of the application.
              </li>
              <li style={{ fontSize: "20px" }}>
                Adjusted the front-end to implement design changes and
                improvements.
              </li>
              <li style={{ fontSize: "20px" }}>
                Used Material Design to create a responsive and intuitive
                design.
              </li>
              <li style={{ fontSize: "20px" }}>
                Did back-end programming in C# to communicate with the
                front-end.
              </li>
              <li style={{ fontSize: "20px" }}>
                Handled databases and data storage related code in both
                front-end and back-end.
              </li>
              <li style={{ fontSize: "20px" }}>
                Performed testing, bug hunting and bug fixing.
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

export default Jackpot;
