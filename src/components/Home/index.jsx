import { useEffect, useState } from "react";

import NoPlaylist from "./NoPlaylist";
import PlaylistContainer from "./PlaylistContainer";

const HomePage = ({ playlists }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Object.values(playlists));
  }, [playlists]);

  return (
    <>
      {items.length > 0 ? (
        <PlaylistContainer listItem={items} />
      ) : (
        <NoPlaylist />
      )}
    </>
  );
};

export default HomePage;
