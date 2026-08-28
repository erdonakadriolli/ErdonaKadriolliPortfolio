
export const getGeminiChatResponse = async (history: { role: 'user' | 'model', parts: { text: string }[] }[]): Promise<string> => {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ history }),
    });

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}`);
    }

    const data = await response.json();
    return data.text || "I'm sorry, I'm having a bit of trouble connecting to Erdona's memory right now.";
  } catch (error) {
    console.error("Chat API Error:", error);
    return "I encountered an error. Please try again or reach out to Erdona directly!";
  }
};

