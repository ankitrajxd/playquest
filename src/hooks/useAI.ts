import { GoogleGenerativeAI } from "@google/generative-ai";
import { useQuery } from "@tanstack/react-query";

const useAI = (prompt: string, clicked?: boolean) => {
  async function run() {
    const { VITE_GOOGLE_AI_API_KEY } = import.meta.env;

    const genAI = new GoogleGenerativeAI(VITE_GOOGLE_AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const resarray = response.text().split("\n");

    return resarray;
  }

  return useQuery({
    queryKey: ["aitext", clicked],
    queryFn: run,
    staleTime: 0,
    cacheTime: 0,
  });
};

export default useAI;
