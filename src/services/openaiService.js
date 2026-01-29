import OpenAI from "openai";

let openaiClient = null;

export const initializeOpenAI = async () => {
  try {
    const isElectron =
      typeof window !== "undefined" &&
      window.Electron &&
      typeof window.Electron.getApiKey === "function";

    const apiKey = isElectron
      ? await window.Electron.getApiKey()
      : import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      console.error("Missing OpenAI API key");
      return false;
    }

    openaiClient = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });

    return true;
  } catch (error) {
    console.error("Failed to initialize OpenAI:", error);
    return false;
  }
};

const getOpenAIClient = () => {
  if (!openaiClient) {
    throw new Error("OpenAI client not initialized");
  }

  return openaiClient;
};

export const sendMessageToAI = async (messages) => {
  const client = getOpenAIClient();

  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
    });

    return (
      response?.choices?.[0]?.message?.content ??
      "No response from AI"
    );
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw error;
  }
};
