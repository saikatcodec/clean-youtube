import { useEffect, useState } from "react";
import ImgCard from "../Card";

const HomePage = ({ playlists }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(Object.values(playlists));
  }, [playlists]);

  return (
    <>
      {items.length > 0 &&
        items.map((item) => <ImgCard key={item.playlistId} item={item} />)}
    </>
  );
};

export default HomePage;
