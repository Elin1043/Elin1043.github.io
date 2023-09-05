import { Divider, Grid } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

import ProjectCard from "../components/Projects/ProjectCard";
import { ProjectList } from "../Data/ProjectsList";

type ProjectsProps = {
  onHomePage: boolean;
};

const Projects = (props: ProjectsProps) => {
  const { onHomePage } = props;
  const projectList = ProjectList();
  const projects = projectList.map((projectItem) => (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      key={projectItem.id}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <ProjectCard project={projectItem}></ProjectCard>
    </Grid>
  ));
  return (
    <>
      <HashTag
        label={"projects"}
        textSize={32}
        withDivider={onHomePage}
      ></HashTag>

      <Grid container spacing={2} sx={{ padding: "50px 0" }}>
        {projects}
      </Grid>
    </>
  );
};

export default Projects;
