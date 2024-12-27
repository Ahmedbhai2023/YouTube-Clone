import React from 'react';
import { Home, Compass, Clock, ThumbsUp, PlaySquare, Film, Gamepad, Newspaper, Trophy, Flame } from 'lucide-react';

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Subscriptions' },
  { icon: Clock, label: 'History' },
  { icon: ThumbsUp, label: 'Liked Videos' },
  { icon: Film, label: 'Movies' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
  { icon: Flame, label: 'Trending' },
];

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-3.5rem)] bg-white p-2 overflow-y-auto">
      {SIDEBAR_ITEMS.map(({ icon: Icon, label }) => (
        <button
          key={label}
          className="w-full flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg"
        >
          <Icon className="w-6 h-6" />
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}