import { Configuration, OpenAIApi } from "openai";
import { PromptPreload } from "../info";

const openAi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPEN_AI_API_KEY,
  })
);

export const getResponse = async (prompt: string) => {
  const response = await openAi.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: PromptPreload + prompt }],
  });
  return response.data.choices[0].message.content;
};
