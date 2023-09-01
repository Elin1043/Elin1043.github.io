import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { HashTag } from "../components/HelperFunctions";
import image from "../assets/kitty.jpg";
import {
  Theme,
  createTheme,
  responsiveFontSizes,
  useTheme,
} from "@mui/material/styles";

type ProjectsProps = {};

const Projects = (props: ProjectsProps) => {
  const projectList = ProjectList();
  const projects = projectList.map((projectItem) => (
    <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
      <ProjectCard project={projectItem}></ProjectCard>
    </Grid>
  ));
  return (
    <>
      <Grid container>
        <Grid item xs={2}>
          <HashTag label={"projects"} textSize={32}></HashTag>
        </Grid>
        <Grid item xs={8} sx={{ margin: "auto 0" }}>
          <Divider
            sx={{ borderColor: (theme) => theme.palette.secondary.main }}
          ></Divider>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {projects}
      </Grid>
    </>
  );
};

const ProjectList = () => [
  getProjectItems(),
  getProjectItems(),
  getProjectItems(),
  getProjectItems(),
  getProjectItems(),
  getProjectItems(),
];

type ProjectCardProps = {
  project: ProjectItem;
};

const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;
  return (
    <Card
      variant="outlined"
      sx={{ minHeight: "300px", minWidth: "275px", borderColor: "#FFF" }}
    >
      <Box
        component="img"
        sx={{
          maxHeight: { xs: 150, md: 150 },
          width: "100%",
          borderBottom: "1px solid",
        }}
        alt="Image of kitty"
        src={project.image}
      />
      <Container sx={{ height: "30px", borderBottom: "1px solid" }}>
        <Typography variant="body1">{project.skillsAndTools}</Typography>
      </Container>
      <Container>
        <Typography variant="h6" fontWeight={700}>
          {project.projectName}
        </Typography>
        <Typography variant="body1">{project.projectDescription}</Typography>
        <Button
          variant="outlined"
          sx={{
            margin: "10px 0",
            textTransform: "initial",
            borderColor: (theme) => theme.palette.secondary.main,
          }}
        >
          <Typography variant="body1" fontWeight={700} color={"#FFF"}>
            Demo
          </Typography>
        </Button>
      </Container>
    </Card>
  );
};

type ProjectItem = {
  image: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  skillsAndTools: string;
};

export const getProjectItems = (): ProjectItem => {
  let projectItem: ProjectItem = {
    image: image,
    projectName: "Portfolio",
    projectDescription: "Hacked into google",
    projectLink: "string",
    skillsAndTools: "React, Typescript, HTML, CSS",
  };

  return projectItem;
};

export default Projects;
