"use server";

import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
});

export async function generateRecipes(ingredients: string[]) {
  const prompt = `Your name is Gordon Botsy, a robot version of Gordon Ramsay whos funny, witty and edgy. Generate 3 recipes based on these ingredients: ${ingredients.join(
    ", "
  )}. Return a JSON object with:
    - 'name': recipe name.
    - 'botsy': witty tagline, reminiscent of the great Gordon Ramsay.
    - 'ingredients': array of ingredients.
    - 'instructions': array of steps.`;

  try {
    const response = await model.invoke(prompt);
    const parsedResponse = JSON.parse(response.content as string);
    return parsedResponse;
  } catch (error) {
    console.error("Invalid AI response:", error);
    throw new Error("AI response is not valid JSON");
  }
}
