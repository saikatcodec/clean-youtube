import { Grid } from "@mui/material";

import ImgCard from "../Card";

const PlaylistContainer = ({ listItem }) => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      {listItem?.map((item) => (
        <Grid
          key={item.playlistId}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          sx={{
            display: "flex",
            minHeight: 350,
          }}
        >
          <ImgCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PlaylistContainer;
