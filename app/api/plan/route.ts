import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { destination, days, companions, budget, interests } = body;

  // 1. 组装prompt
  const prompt = `I want to plan a ${days}-day trip to ${destination}. Companions: ${
    companions || "none"
  }. Budget: ${budget || "not specified"}. Interests: ${
    interests || "not specified"
  }. Please provide a detailed itinerary including attractions, transportation, accommodation, food, and any booking tips. Format the result in markdown with clear day-by-day sections.`;

  // 2. 检查API KEY
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Gemini API key not set." },
      { status: 500 }
    );
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    return NextResponse.json({ result: text });
  } catch (e) {
    return NextResponse.json(
      { error: "Failed to fetch from Gemini API.", details: String(e) },
      { status: 500 }
    );
  }
}
