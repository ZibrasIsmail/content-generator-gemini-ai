"use server";

import { GoogleGenerativeAI, HarmCategory } from "@google/generative-ai";
import Together from "together-ai";

const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });
const genAI = new GoogleGenerativeAI(
  process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY!
);

const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-pro-exp-0801",
});

const geminiConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 64,
  maxOutputTokens: 8192,
};

const llamaConfig = {
  max_tokens: 2048,
  temperature: 0.7,
  top_p: 0.7,
  top_k: 50,
  repetition_penalty: 1,
  stop: ["<|eot_id|>", "<|eom_id|>"],
};

export async function sendMessage(
  messages: { role: string; content: string }[],
  inputMessage: string,
  selectedModel: string
) {
  if (selectedModel === "gemini") {
    return sendGeminiMessage(messages, inputMessage);
  } else if (selectedModel === "llama") {
    return sendLlamaMessage(messages, inputMessage);
  } else {
    throw new Error("Invalid model selected");
  }
}

async function sendGeminiMessage(
  messages: { role: string; content: string }[],
  inputMessage: string
) {
  const chatSession = geminiModel.startChat({
    generationConfig: geminiConfig,
    history: messages.map((message) => ({
      parts: [{ text: message.content }],
      role: message.role as HarmCategory,
    })),
  });

  try {
    const result = await chatSession.sendMessage(inputMessage);
    const response = result.response;
    return { role: "model", content: response.text() };
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return handleError(error);
  }
}

async function sendLlamaMessage(
  messages: { role: string; content: string }[],
  inputMessage: string
) {
  try {
    const response = await together.chat.completions.create({
      messages: messages.map((message) => ({
        role: message.role as "user" | "system" | "assistant",
        content: message.content,
      })),
      model: "meta-llama/Meta-Llama-3.1-405B-Instruct-Turbo",
      ...llamaConfig,
    });
    return {
      role: "model",
      content: response.choices[0].message?.content ?? "",
    };
  } catch (error) {
    console.error("Error sending message to Llama:", error);
    return handleError(error);
  }
}

function handleError(error: unknown) {
  let errorMessage = "An error occurred while processing your message.";
  if (error instanceof Error) {
    if (error.message.includes("RECITATION")) {
      errorMessage =
        "The AI's response was blocked due to potential recitation of copyrighted or sensitive information. Please try rephrasing your question.";
    } else if (
      error.message.includes("GoogleGenerativeAIFetchError") ||
      error.message.includes("TogetherAIFetchError")
    ) {
      errorMessage =
        "There was an error connecting to the AI service. Please try again later.";
    }
  }
  return { role: "model", content: errorMessage };
}
