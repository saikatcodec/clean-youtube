import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const getItems = async (playlistId, pageToken = "", results = []) => {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistId}&key=${API_KEY}&pageToken=${pageToken}`;

  let data;
  try {
    data = await axios.get(url);
    data = data.data;
    results = [...results, ...data.items];
  } catch (e) {
    console.log(e);
  } finally {
    if (data.nextPageToken) {
      results = getItems(playlistId, data.nextPageToken, results);
    }
  }

  return results;
};

const getPlaylists = async (playlistId) => {
  const url = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`;

  let playlistInfo;

  try {
    const { data } = await axios.get(url);
    let playlistItems = await getItems(playlistId);

    playlistItems = playlistItems.map((item) => {
      const {
        title,
        description: videoDes,
        thumbnails: { medium: defaultThumbnails },
        position,
      } = item.snippet;
      return {
        id: item.id,
        title,
        videoDes,
        defaultThumbnails,
        position,
        ...item.contentDetails,
      };
    });

    const {
      channelId,
      title: name,
      description,
      thumbnails: { medium: defaultThumbnails },
      channelTitle: channelName,
    } = data?.items[0]?.snippet;

    playlistInfo = {
      playlistId,
      channelId,
      name,
      description,
      defaultThumbnails,
      channelName,
      items: playlistItems,
    };
  } catch (e) {
    console.log(e);
  }

  return playlistInfo;
};

export default getPlaylists;
