import { useEffect, useState } from "react";

import getPlaylists from "../api/fetchData";
import storage from "../utils/Storage";

/**
 * Initial state of the app
 */
const INIT_STATE = {
  playlists: {},
  favorites: [],
  recents: [],
};

/**
 * key for storing state in localStorage
 */
const STORAGE_KEY = "cy__playlist";

/**
 * Custom hook for controlling the app
 * @returns Object and Function for later use
 */
const usePlaylist = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  /**
   * load the state from localStorage if stored
   */
  useEffect(() => {
    const localState = storage.getData(STORAGE_KEY);
    if (localState) {
      // Check for valid data
      setState({ ...localState });
    }
  }, []);

  /**
   * save data to localStorage
   */
  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  /**
   * Change the state by fetching data from youtube data api
   * @param {string} playlistId Unique ID of Youtube playlist
   */
  const getPlaylistById = async (playlistId) => {
    setLoading(true);
    if (state.playlists[playlistId]) {
      setLoading(false);
      return;
    }
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

  /**
   * Add Playlist ID to favorites
   * @param {string} playlistId Unique ID of Youtube playlist
   */
  const addToFavorites = (playlistId) => {
    setLoading(true);

    setState((prev) => ({
      ...prev,
      favorites: [...prev.favorites, playlistId],
    }));

    setLoading(false);
  };

  /**
   * Add Playlist ID to recents
   * @param {string} playlistId Unique ID of Youtube playlist
   */
  const addToRecents = (playlistId) => {
    setLoading(true);

    setState((prev) => ({
      ...prev,
      recents: [...prev.recents, playlistId],
    }));

    setLoading(false);
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
