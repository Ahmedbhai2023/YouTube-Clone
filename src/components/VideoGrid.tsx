import React from 'react';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

const VIDEOS: Video[] = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Building a Modern Web Application',
    channel: 'Tech Channel',
    views: '120K views',
    timestamp: '3 days ago'
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    title: 'Web Development Tutorial',
    channel: 'Code Masters',
    views: '89K views',
    timestamp: '1 week ago'
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd',
    title: 'The Future of AI',
    channel: 'Tech Insights',
    views: '250K views',
    timestamp: '2 weeks ago'
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'React Best Practices 2024',
    channel: 'React Masters',
    views: '180K views',
    timestamp: '4 days ago'
  },
  {
    id: '5',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    title: 'TypeScript Advanced Concepts',
    channel: 'TypeScript Pro',
    views: '95K views',
    timestamp: '5 days ago'
  },
  {
    id: '6',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    title: 'Full Stack Development Guide',
    channel: 'Dev Guide',
    views: '150K views',
    timestamp: '1 week ago'
  },
];

export function VideoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {VIDEOS.map((video) => (
        <div key={video.id} className="flex flex-col gap-2">
          <div className="relative aspect-video">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex gap-2">
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600">{video.channel}</p>
              <div className="text-sm text-gray-600">
                <span>{video.views}</span>
                <span className="mx-1">•</span>
                <span>{video.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}