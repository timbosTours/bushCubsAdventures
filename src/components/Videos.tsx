import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

function Videos() {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  const [videos, setVideos] = useState<Video[]>([]);

  const fetchVideos = async () => {
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30`
    );
    const items = res.data.items;
    const videoList = items.map((video: any) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.default.url,
    }));
    setVideos(videoList);
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      {videos.map((video) => {
        return (
          <div key={video.id}>
            <p>{video.title}</p>
            <img src={video.thumbnail} alt={video.title} />
          </div>
        );
      })}
    </div>
  );
}

export default Videos;
