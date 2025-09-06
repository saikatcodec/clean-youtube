import { Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Playlist = ({ state }) => {
  const { playlistId } = useParams();
  const current = state.playlists[playlistId];

  return (
    <Container maxWidth="lg">
      <img
        src={current.defaultThumbnails.url}
        alt={current.name}
        width="80%"
        height="30%"
      />
      <Typography variant="h6">{current.name}</Typography>
      <Typography variant="body2">{current.description}</Typography>
    </Container>
  );
};

export default Playlist;
