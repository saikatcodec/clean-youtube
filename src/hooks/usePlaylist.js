import { useState } from "react";

import getPlaylists from "../api/fetchData";

const INIT_STATE = {
  playlists: {},
  favorites: [],
  recents: [],
};

const usePlaylist = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getPlaylistById = async (playlistId) => {
    setLoading(true);
    let responseData;

    try {
      responseData = await getPlaylists(playlistId);
      setLoading(false);
      setError("");
    } catch (e) {
      setLoading(false);
      setError(e.message);
      console.log(e);
    }

    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistId]: responseData,
      },
    }));
  };

  const addToFavorites = (playlistId) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev.favorites, playlistId],
    }));
  };

  const addToRecents = (playlistId) => {
    setState((prev) => ({
      ...prev,
      recents: [...prev.recents, playlistId],
    }));
  };

  return {
    state,
    loading,
    error,
    getPlaylistById,
    addToFavorites,
    addToRecents,
  };
};

export default usePlaylist;
