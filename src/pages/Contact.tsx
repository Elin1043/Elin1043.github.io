import { Typography } from "@mui/material";
import { HashTag } from "../components/HelperFunctions";

type ContactProps = {
  onHomePage: boolean;
};

function Contact(props: ContactProps) {
  const { onHomePage } = props;
  return (
    <HashTag label={"contact"} textSize={32} withDivider={onHomePage}></HashTag>
  );
}

export default Contact;
