import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'

interface Video {
  id: string;
  title: string;
  thumbnail: string;
}

function VideosList() {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID;

  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchVideos = async () => {
    setIsLoading(true)
    const res = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=30`
    );
    const items = res.data.items;
    const videoList = items.map((video: any) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      thumbnail: video.snippet.thumbnails.default.url,
    }));
    setVideos(videoList)
    setIsLoading(false)
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      {isLoading ? (
      <h2>LOADING...</h2>
      ) :
      (videos.map((video) => {
        return (
          <div key={video.id}>
            <Link href={`/${video.id}`}>
            <img src={video.thumbnail} alt={video.title} />
              <p>{video.title}</p>
            </Link>
          </div>
        );
      }))}
    </div>
  );
}

export default VideosList;
