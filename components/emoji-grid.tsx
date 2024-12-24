'use client';

import { Card } from './ui/card';
import Image from 'next/image';
import { Download, Heart } from 'lucide-react';
import { Button } from './ui/button';

interface EmojiGridProps {
  emojis: {
    id: string;
    imageUrl: string;
    prompt: string;
    likes: number;
  }[];
}

export function EmojiGrid({ emojis }: EmojiGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
      {emojis.map((emoji) => (
        <Card key={emoji.id} className="group relative">
          <div className="aspect-square relative">
            <Image
              src={emoji.imageUrl}
              alt={emoji.prompt}
              fill
              className="object-cover p-4"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <Button size="icon" variant="ghost" className="text-white">
                <Heart className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <p className="text-xs text-center p-2 text-muted-foreground">
            {emoji.prompt}
          </p>
        </Card>
      ))}
    </div>
  );
} 