import React, { useEffect, useState } from 'react'

import axios from 'axios'

interface Video {
  id: string;
  title: string;
  thumbnail: string;
} 


function Videos() {
const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
  
  const [videos, setVideos] = useState<Video[]>([])

    const fetchVideos = async () => {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=50
      `);
      console.log(res.data.items);
      setVideos(res.data.items)
      
    }

  return (
    <div>
      <button onClick={fetchVideos}>get videos</button>
      {videos.map((_video) => {
        return (
          <div key={_video.title}>
            <p>{_video.title}</p>
            </div>
        )
      })
      }
    </div>
  )
}

export default Videos