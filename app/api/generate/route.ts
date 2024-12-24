import { NextResponse } from 'next/server';
import Replicate from 'replicate';

// Initialize the Replicate client
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    // Get the prompt from the request body
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    // Call Replicate's API to generate the emoji
    const output = await replicate.run(
      "fofr/sdxl-emoji:dee76b5afde21b0f01ed7925f0665b7e472116c7c9cd6474fe3e83e898eb3a19",
      {
        input: {
          prompt: prompt,
          negative_prompt: "text, watermark, signature, blurry, low quality, logo",
          num_outputs: 1
        }
      }
    );

    return NextResponse.json({ images: output });
  } catch (error) {
    console.error('Error generating emoji:', error);
    return NextResponse.json(
      { error: 'Failed to generate emoji' },
      { status: 500 }
    );
  }
} 