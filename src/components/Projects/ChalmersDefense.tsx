import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import ChalmersDefenseImage from "../../assets/ProjectImages/ChalmersDefense.png";

const images: string[] = [ChalmersDefenseImage];
for (let i = 1; i <= 4; i++) {
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
            Welcome to Chalmers Defense! A tower defense game where you defend
            Chalmers from the corona virus. The player can place different types
            of towers representing different programs at Chalmers. The towers
            can be upgraded to become more powerful and the player can also sell
            towers to get money back. The corona virus attacks in form of waves
            and you have to defend Chalmers from the virus that keeps getting
            stronger and stronger. The game is over when the virus has been
            defeated or when Chalmers has taken too much damage.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            Chalmers Defense was developed by a team of four using Java and
            LibGDX. Every team member worked on all parts of the game and it
            became a fun little project during the outbreak of the corona virus.
            Features included are: Tower placement, Tower upgrades, Waves of
            enemies, Settings, Power-ups and more.
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

export default ChalmersDefense;
