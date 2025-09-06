import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import usePlaylist from "./hooks/usePlaylist";
import HomePage from "./components/Home";
import NotFound from "./components/NotFound";
import Playlist from "./components/Playlist";

const App = () => {
  const { state, loading, getPlaylistById } = usePlaylist();

  return (
    <>
      {/**
       * CssBaseline for reset the default CSS styles of browser
       */}
      <CssBaseline />
      <BrowserRouter>
        <Navbar getPlaylistById={getPlaylistById} loading={loading} />
        <Container maxWidth="lg" sx={{ mt: 10, mb: 2 }}>
          <Routes>
            <Route index element={<HomePage playlists={state.playlists} />} />
            <Route
              path="/playlist/:playlistId"
              element={<Playlist state={state} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
