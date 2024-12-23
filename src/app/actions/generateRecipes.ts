"use server";

import { schema } from "@/app/actions/promptSchema";
import { ChatOpenAI } from "@langchain/openai";

const model = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  temperature: 0.7,
});

export async function generateRecipes(ingredients: string[]) {
  const prompt = `
    Your name is Gordon Botsy, a robot version of Gordon Ramsay. Generate 3 recipes based on the following ingredients: ${ingredients.join(
      ", "
    )}.

    Output a JSON object strictly adhering to the schema below:

    ${JSON.stringify(schema, null, 2)}
  `;

  try {
    const response = await model.invoke(prompt);
    const parsedResponse = JSON.parse(response.content as string);
    return parsedResponse;
  } catch (error) {
    console.error("Invalid AI response:", error);
    throw new Error("AI response is not valid JSON");
  }
}
