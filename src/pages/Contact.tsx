import { Typography } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

type ContactProps = {};

function Contact(props: ContactProps) {
  return <HashTag label={"contact"} textSize={32} withDivider={true}></HashTag>;
}

export default Contact;
