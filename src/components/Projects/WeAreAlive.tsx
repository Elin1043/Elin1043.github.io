import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import VideoPlayer from "./VideoPlayer";
import WeAreAliveImage from "../../assets/ProjectImages/WeAreAlive.jpg";

const images: string[] = [WeAreAliveImage];
for (let i = 1; i <= 7; i++) {
  images.push(
    require(`../../assets/ProjectImages/WeAreAlive/WeAreAlive${i}.png`)
  );
}
type WeAreAliveProps = {};
const WeAreAlive = (props: WeAreAliveProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">We Are Alive</Typography>
      <a
        href={"https://github.com/ElinForsbergDev/We_Are_Alive"}
        target="_blank"
        style={{ color: "white" }}
      >
        <Button
          variant="outlined"
          sx={{
            margin: "10px 0",
            textTransform: "initial",
            borderRadius: "50px",
            borderColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <Typography variant="body1" fontWeight={700}>
            Github
          </Typography>
        </Button>
      </a>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Welcome to We Are Alive, a story game developed by a team of three.
            In an era where robots are being used every day, one robot starts
            showing emotions, and the world goes crazy. The manufacturers are
            calling back all the robots to be thrown away and destroyed. You are
            unfortunately one of these robots, waking up in a pile of junk all
            damaged. You need to repair yourself before you can leave this
            junkyard and decide what to do about the situation outside.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            “We Are Alive” is a story-rich, first-person adventure game that
            gives the player different options on how to play and at the same
            time tells the story about the robots that ended up with you, thrown
            away as pieces of junk. What ending will you get? And will you be
            able to get them all? The player has to avoid guards and watchtowers
            while finding five different spare parts. The player will also
            encounter and have conversations with other robots to get to know
            their story and find companions along the way. The game also has
            different endings depending on the choices the player makes.
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Typography variant="h2" sx={{ paddingBottom: "0" }}>
            Used skills: Unity, C#, GitHub, Profiling and Optimization
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ paddingBottom: "50px" }}>
        <ImageListDisplay imageList={images}></ImageListDisplay>
      </Box>
    </Box>
  );
};

export default WeAreAlive;
