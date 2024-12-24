'use client';

import { useState } from 'react';
import { EmojiForm } from '@/components/emoji-form';
import { EmojiGrid } from '@/components/emoji-grid';
import { Emoji } from '@/types';

export default function Home() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  const handleGenerated = (imageUrl: string, prompt: string) => {
    const newEmoji: Emoji = {
      id: Date.now().toString(), // We'll replace this with a proper ID later
      imageUrl,
      prompt,
      likes: 0,
    };
    setEmojis((prev) => [newEmoji, ...prev]);
  };

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Emoji Maker</h1>
        
        <div className="flex justify-center">
          <EmojiForm onGenerated={handleGenerated} />
        </div>

        <EmojiGrid emojis={emojis} />
      </div>
    </main>
  );
}
