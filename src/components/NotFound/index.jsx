import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "15rem",
      }}
    >
      <Typography variant="h3">Page Not Found at the URL</Typography>
      <Link component={RouterLink} to="/">
        Back to Home
      </Link>
    </Container>
  );
};

export default NotFound;
