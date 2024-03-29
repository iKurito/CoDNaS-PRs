import { container, title, mainRaised } from "../material-kit-react";

const homeStyle = {
  container: {
    zIndex: "12",
    color: "black",
    textAlign: "center",
    ...container,
  },
  outcontainer: {
    zIndex: "12",
    color: "black",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    ...mainRaised,
  },
  root: {
    backgroundImage: "url(/background.PNG)",
    backgroundSize: "auto",
    height: "auto",
    width: "auto",
    paddingBottom: 500,
  },
};

export default homeStyle;
