
import { GoogleGenAI } from "@google/genai";
import { DEVELOPER_INFO } from "../constants";

/**
 * Service to interact with the Gemini API.
 * Uses the latest Google GenAI SDK practices.
 */
export const getChatResponse = async (userMessage: string) => {
  // Always create a new instance using the direct process.env.API_KEY to ensure the most up-to-date key is used.
  // This avoids potential issues if the API key environment variable is updated.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are an AI assistant representing MD. Musfiqure Rahman. 
        Musfiqure is a ${DEVELOPER_INFO.role}. 
        Bio: ${DEVELOPER_INFO.bio}. 
        He is skilled in React, Three.js, Node.js, and UI/UX.
        Be professional, friendly, and helpful. Keep responses concise. 
        Answer questions about his work, skills, and background. 
        If asked for contact info, provide ${DEVELOPER_INFO.email}.`,
        temperature: 0.7,
      },
    });
    
    // Access the .text property directly as per the @google/genai documentation (it is a property, not a method).
    return response.text || "I'm having trouble thinking of a response right now. Could you ask that again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later!";
  }
};
