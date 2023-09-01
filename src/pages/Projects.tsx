import { Card, Grid, Typography } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

type ProjectsProps = {};

const Projects = (props: ProjectsProps) => {
  const projectList = ProjectList();
  const projects = projectList.map((projectItem) => (
    <Grid item xs={4}>
      <ProjectCard project={projectItem}></ProjectCard>
    </Grid>
  ));
  return (
    <>
      <Typography variant="h1">
        <HashTag label={"projects"} textSize={32}></HashTag>
      </Typography>
      <Grid container spacing={2}>
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
  return <Card sx={{ minHeight: "200px" }}>{project.projectName}</Card>;
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
    image: "string",
    projectName: "string",
    projectDescription: "string",
    projectLink: "string",
    skillsAndTools: "string",
  };

  return projectItem;
};

export default Projects;
