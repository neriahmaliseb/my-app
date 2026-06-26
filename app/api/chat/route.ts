import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const response = await client.messages.create({
    model: "claude-sonnet-4-0",
    max_tokens: 200,
    messages: [
      {
        role: "user",
        content: message,
      },
    ],
  });

  const reply =
    response.content[0].type === "text"
      ? response.content[0].text
      : "";

  return NextResponse.json({ reply });
}