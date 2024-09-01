"use client";

import { useState } from "react";
import { sendMessage } from "@/actions/chat";

const models = [
  { id: "gemini", name: "Gemini 1.5 Pro" },
  { id: "llama", name: "Meta-Llama 3.1 405B Instruct Turbo" },
];

export default function ChatComponent() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    []
  );
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0].id);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;

    setIsLoading(true);
    const newMessages = [...messages, { role: "user", content: inputMessage }];
    setMessages(newMessages);
    setInputMessage("");

    try {
      const response = await sendMessage(
        newMessages,
        inputMessage,
        selectedModel
      );
      setMessages([...newMessages, response]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mb-4">
        <label htmlFor="model-select" className="block mb-2">
          Select Model:
        </label>
        <select
          id="model-select"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        >
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col w-full h-96 overflow-y-auto mb-4 p-4 border border-gray-300 rounded">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.role === "user" ? "text-right" : "text-left"}`}
          >
            <span
              className={`inline-block p-2 rounded ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            >
              {message.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          className="flex-grow p-2 border border-gray-300 rounded-l"
          placeholder="Type your message..."
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className="p-2 bg-blue-500 text-white rounded-r"
          disabled={isLoading}
        >
          Send
        </button>
      </div>
    </>
  );
}
