import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { ProjectItem } from "../../Types/ProjectsItem";

type ProjectCardProps = {
  project: ProjectItem;
  isSmallScreen: boolean;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { project, isSmallScreen } = props;
  const theme = useTheme();
  return (
    <Card
      sx={{
        minHeight: "500px",
        width: isSmallScreen ? "350px" : "500px",
        textAlign: "center",
        backgroundColor: (theme) => theme.palette.primary.dark,
        boxShadow: "5px 5px 10px 0px rgba(0,0,0,0.75)",
      }}
    >
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 300, md: 300 },
          paddingTop: "10px",
        }}
        alt="Image of kitty"
        src={project.image}
      />

      <Container>
        <Typography variant="h2" fontWeight={700} sx={{ paddingBottom: "0" }}>
          {project.projectName}
        </Typography>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          {project.skillsAndTools.split(",").map((skill) => (
            <Grid item>
              <SkillItem text={skill} />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h6">{project.projectDescription}</Typography>

        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item>
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
                Demo
              </Typography>
            </Button>
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      </Container>
    </Card>
  );
};

type SkillItemProps = {
  text: string;
};

const SkillItem = (props: SkillItemProps) => {
  const { text } = props;
  return (
    <Box
      sx={{
        backgroundColor: "#184057",
        borderRadius: "50px",
        padding: "5px 10px",
        margin: "5px",
        display: "inline-block",
      }}
    >
      <Typography variant="body1" fontWeight={700}>
        {text}
      </Typography>
    </Box>
  );
};

export default ProjectCard;
