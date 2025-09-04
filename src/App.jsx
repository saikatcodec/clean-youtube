import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

import ButtonAppBar from "./components/Navbar";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <ButtonAppBar />
        <div>Clean Youtube</div>
      </Container>
    </>
  );
};

export default App;
