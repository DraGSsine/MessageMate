import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "X-Frame-Options": "ALLOWALL", // Allow embedding in any iframe
  "Content-Security-Policy": "frame-ancestors *", // Allow all origins
};


const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

if (!apiKey) {
  throw new Error("API key is not set");
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    candidateCount: 1,
    temperature: 1.0,
  },
});

const generateResponse = async (question) => {
  const instructions = `
    Your task is to provide a direct and relevant response to the following user message. The user is primarily using LinkedIn.
    Avoid generic introductions and focus on addressing the user's specific query or statement.
  `;

  const prompt = `Instructions: ${instructions}\nUser message: ${question}`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating response:", error);
    throw new Error("Failed to generate response");
  }
};

export async function OPTIONS() {
  return new NextResponse(null, { headers: corsHeaders });
}

export async function POST(req) {
  try {
    const { prompt } = await req.json();
    if (!prompt) {
      return new NextResponse(JSON.stringify({ error: "Prompt is required" }), { status: 400, headers: corsHeaders });
    }

    const response = await generateResponse(prompt);
    return new NextResponse(JSON.stringify({ response }), { headers: corsHeaders });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: "Failed to generate response" }), { status: 500, headers: corsHeaders });
  }
}