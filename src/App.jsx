import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

import Navbar from "./components/Navbar";
import usePlaylist from "./hooks/usePlaylist";
import HomePage from "./components/Home";

const App = () => {
  const { state, loading, getPlaylistById } = usePlaylist();

  return (
    <>
      {/**
       * CssBaseline for reset the default CSS styles of browser
       */}
      <CssBaseline />
      <Navbar getPlaylistById={getPlaylistById} loading={loading} />
      <Container maxWidth="lg" sx={{ mt: 10, mb: 2 }}>
        <HomePage playlists={state.playlists} />
      </Container>
    </>
  );
};

export default App;
