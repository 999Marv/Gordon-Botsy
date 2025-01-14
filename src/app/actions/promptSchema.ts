export const schema = {
  type: "object",
  properties: {
    recipes: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string", description: "The name of the recipe" },
          botsy: { type: "string", description: "A witty tagline" },
          ingredients: {
            type: "array",
            items: {
              type: "string",
              description:
                "Step-by-step instructions without numbers, e.g., 'Cook food' instead of '1. Cook food'.",
            },
          },
          instructions: {
            type: "array",
            items: { type: "string", description: "Step-by-step instructions" },
          },
        },
        required: ["name", "botsy", "ingredients", "instructions"],
        additionalProperties: false,
      },
    },
  },
  required: ["recipes"],
  additionalProperties: false,
};
