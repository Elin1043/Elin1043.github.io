import { Box, Button, Grid, Typography } from "@mui/material";
import ImageListDisplay from "./ImageDisplay";
import CleverFoxImage from "../../assets/ProjectImages/CleverFox.jpg";
import VideoPlayer from "./VideoPlayer";

const images: string[] = [CleverFoxImage];
for (let i = 1; i <= 5; i++) {
  images.push(
    require(`../../assets/ProjectImages/CleverFox/CleverFox${i}.png`)
  );
}
type CleverFoxProps = {};
const CleverFox = (props: CleverFoxProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography variant="h1">Clever Fox!</Typography>
      <a
        href={"https://github.com/Danilll01/DAT257-Group-Orup"}
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
            Welcome to Clever Fox, a 2D learning game designed for kids by a
            team of eight developers. This captivating game features a
            collection of engaging mini-games carefully crafted to provide
            valuable learning experiences. With an upcoming preschool teacher as
            a stakeholder, we've tailored these games to cater to young
            learners' needs and abilities. In Clever Fox, children can explore
            various mini-games, each offering a unique educational adventure.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography textAlign={"start"} variant="h6" sx={{ margin: "20px" }}>
            They can dress the fox according to real-time weather conditions,
            thanks to a weather API that provides accurate weather data based on
            their location. The memory game challenges them with adorable
            animal-themed pairs, while math games enhance their problem-solving
            skills. Additionally, kids can expand their vocabulary by matching
            words and letters in an interactive way. To add a touch of
            creativity, "Musik med räven" lets young composers craft their own
            melodies. Clever Fox offers a playful and enriching journey for kids
            to learn and have fun simultaneously.
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "20px" }}>
        <Grid item xs={12}>
          <Typography variant="h2">
            Used skills: Unity, C#, API calls, Mobile Development (IOS and
            Andriod), GitHub, Profiling and Optimization
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <VideoPlayer embedId={"Oe6FQbx-oBQ?si=QXEpY-cw7kE-UMSm"} />
        </Grid>
      </Grid>
      <Box sx={{ paddingBottom: "50px" }}>
        <ImageListDisplay imageList={images}></ImageListDisplay>
      </Box>
    </Box>
  );
};

export default CleverFox;
