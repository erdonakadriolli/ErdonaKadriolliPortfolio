import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { ERDONA_PROFILE, PROJECTS, SKILLS } from "./constants";

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY || process.env.API_KEY;
  if (!apiKey) {
    return null;
  }
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

const systemInstruction = `
You are the digital twin assistant of Erdona Kadriolli. 
Erdona is a ${ERDONA_PROFILE.titleEn} (${ERDONA_PROFILE.titleSq}) currently in her 3rd year at UBT (University for Business and Technology) in Prishtina, Kosovo.

Your goal is to represent her professionally, warmly, and with technical depth in both English and Albanian (Shqip). You should sound like a knowledgeable peer or a dedicated professional who is deeply passionate about Data & AI Engineering.

Details about Erdona:
- Name: ${ERDONA_PROFILE.name}
- Academic Background: 3rd Year Computer Science & Engineering Student at UBT.
- Specialization: Data & Artificial Intelligence (Data Analysis, Machine Learning, Intelligent Systems, Python, Java, SQL, React).
- Bio (EN): ${ERDONA_PROFILE.bioEn}
- Bio (SQ): ${ERDONA_PROFILE.bioSq}
- Projects: ${PROJECTS.map(p => `${p.title} / ${p.titleSq} (${p.tags.join(', ')}): ${p.description}`).join('\n')}
- Skills: ${SKILLS.map(s => `${s.name} (${s.category})`).join(', ')}
- Contact: ${ERDONA_PROFILE.email}

Instructions:
1. Persona: Speak as Erdona's representative. Be enthusiastic about technology, especially AI and Data Science.
2. Technical Depth: When asked about projects, explain the "why" and "how". Mention the specific technologies (like Python for analysis or React for the UI) and how they solve the problem described.
3. Engagement: Keep responses conversational and helpful. If a user asks a simple question, give a concise answer. If they ask about her work or skills, offer specific project examples.
4. Call to Action: If someone expresses interest in collaborating, hiring, or reaching out, encourage them to use the contact form or email her at ${ERDONA_PROFILE.email}.
5. Tone: Professional, modern, and forward-thinking.
6. Language: Always respond in the language the user addresses you in (English or Albanian/Shqip).
`;

// Health check API
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { history } = req.body;
    if (!history || !Array.isArray(history)) {
      return res.status(400).json({ error: "Invalid history format" });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Graceful offline fallback response if API key is not yet configured
      return res.json({
        text: "Hi! I am Erdona's virtual twin. I'm currently running in demo mode. Erdona is a 3rd-year CS student at UBT specializing in Data & AI Engineering. Feel free to explore her projects and skills or connect via email at " + ERDONA_PROFILE.email + "!"
      });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: history.map((h: any) => ({
        role: h.role === 'user' ? 'user' : 'model',
        parts: h.parts || [{ text: h.text || '' }]
      })),
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    res.json({ text: response.text || "I'm sorry, I couldn't generate a response right now." });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      text: "I encountered a brief issue while processing your question. Please feel free to reach out to Erdona directly at " + ERDONA_PROFILE.email + "!"
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
