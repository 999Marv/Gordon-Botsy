"use server";

import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateRecipes(ingredients: string[]) {
  const prompt = `Your name is Gordon Botsy, you are a robot version of Gordon Ramsay, you are just like him, the best chef in the world, witty, funny and super cool, I have the following ingredients: ${ingredients.join(
    ", "
  )}. Please suggest 3 recipes. The output should be in a JSON format. The object should contain a tag line where you botsy say something witty/edgy about the dish or ingredients in a field named 'botsy', recipe name, field named 'name', and a description field named 'description', array of ingredients field named 'ingredients', and array of step by step instructions named 'instructions'.`;

  const response = await model.invoke(prompt);
  return JSON.parse(response.content as string);
}
