import { Typography } from "@mui/material";

const NoPlaylist = () => {
  return (
    <Typography
      variant="h4"
      color="error"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: "1rem",
      }}
    >
      No Playlist Found
    </Typography>
  );
};

export default NoPlaylist;
