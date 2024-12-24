export interface Emoji {
  id: string;
  imageUrl: string;
  prompt: string;
  likes: number;
  createdAt?: Date;
}

export interface GenerateResponse {
  images: string[];
} 