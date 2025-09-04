import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import usePlaylist from "./hooks/usePlaylist";
import HomePage from "./components/Home";

const App = () => {
  const { state, getPlaylistById } = usePlaylist();

  // TODO: Delete the console log
  console.log(state);

  return (
    <>
      {/**
       * CssBaseline for reset the default CSS styles of browser
       */}
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} />
      <Container maxWidth="lg">
        <HomePage playlists={state.playlists} />
      </Container>
    </>
  );
};

export default App;
