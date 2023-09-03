import { Divider, Grid } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

import ProjectCard from "../components/Projects/ProjectCard";
import { ProjectList } from "../Data/ProjectsList";

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
      <HashTag label={"projects"} textSize={32} withDivider={true}></HashTag>

      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {projects}
      </Grid>
    </>
  );
};

export default Projects;
