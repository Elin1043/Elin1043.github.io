import { Typography } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

type AboutProps = {};

function About(props: AboutProps) {
  return <HashTag label={"about"} textSize={32} withDivider={true}></HashTag>;
}

export default About;
