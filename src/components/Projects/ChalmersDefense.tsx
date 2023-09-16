import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import ChalmersDefenseImage from "../../assets/ProjectImages/ChalmersDefense.png";
import VideoPlayer from "./VideoPlayer";

const images: string[] = [ChalmersDefenseImage];
for (let i = 1; i <= 9; i++) {
  images.push(
    require(`../../assets/ProjectImages/ChalmersDefense/ChalmersDefense${i}.png`)
  );
}
type ChalmersDefenseProps = {};
const ChalmersDefense = (props: ChalmersDefenseProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Chalmers Defense</Typography>
      <a
        href={"https://github.com/ElinForsbergDev/Chalmers-Defense"}
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
            Welcome to Chalmers Defense, a thrilling tower defense game where
            your mission is to protect Chalmers from the relentless coronavirus
            threat. In this game, players strategically place different types of
            towers, each representing various programs at Chalmers, to fend off
            the virus. These towers can be upgraded to increase their power, and
            players can also sell towers to regain resources. The virus attacks
            in waves, growing stronger with each onslaught. The game's outcome
            hinges on your ability to either defeat the virus entirely or
            prevent Chalmers from sustaining too much damage.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Chalmers Defense was a collaborative effort by a team of four
            developers who used Java and LibGDX to bring this exciting game to
            life. During the outbreak of the coronavirus, this project served as
            both a creative outlet and a source of fun. The game boasts several
            key features, including tower placement, upgrades, waves of enemies,
            settings, power-ups, and much more. Get ready to defend Chalmers in
            an engaging and challenging tower defense experience!
          </Typography>
        </Grid>
      </Grid>

      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Used skills: Unity, C#, GitHub, Profiling and Optimization
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <VideoPlayer embedId={"MJJbRNtd9Tk?si=WdavWYzUzrBxJVf4"} />
        </Grid>
      </Grid>

      <Box sx={{ paddingBottom: "50px" }}>
        <ImageListDisplay imageList={images}></ImageListDisplay>
      </Box>
    </Box>
  );
};

export default ChalmersDefense;
