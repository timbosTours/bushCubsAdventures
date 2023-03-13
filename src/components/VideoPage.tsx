import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Video {
    id: string;
    title: string;
}

function VideoPage() {
    const router = useRouter();
    const [video, setVideo] = useState<Video | null>(null);

    useEffect(() => {
    const { id } = router.query;

    if (id) {
        const fetchVideo = async () => {
        const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&id=${id}&part=snippet`);
        const item = res.data.items[0];
        setVideo({
            id: item.id,
            title: item.snippet.title,
        });
        };

        fetchVideo();
    }
    }, [router.query.id]);

    if (!video) {
    return <div>Loading...</div>;
    }

    return (
    <div>
        <h1>{video.title}</h1>
        <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${video.id}`}
        title={video.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
    </div>
    );
}

export default VideoPage;
