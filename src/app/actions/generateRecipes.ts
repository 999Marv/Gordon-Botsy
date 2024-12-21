"use server";

// Placeholder function to generate recipes
export async function generateRecipes(ingredients: string[]): Promise<unknown> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Placeholder recipes
  const recipes = [
    {
      name: "Improvised Pasta Surprise",
      ingredients: ingredients.map((ing) => `${ing} - as needed`),
      instructions: [
        "Boil water in a large pot.",
        "Cook pasta according to package instructions.",
        "In a separate pan, combine all other ingredients.",
        "Mix cooked pasta with the ingredient mixture.",
        "Serve hot and enjoy your culinary experiment!",
      ],
      comment:
        "This dish is so random, it's like a culinary Russian roulette! - Gordon Botsy",
    },
    {
      name: "Mystery Ingredient Stir-Fry",
      ingredients: ingredients.map((ing) => `${ing} - to taste`),
      instructions: [
        "Heat oil in a wok or large frying pan.",
        "Add all ingredients to the pan in order of cooking time.",
        "Stir-fry until everything is cooked through.",
        "Season with salt and pepper.",
        "Serve over rice or noodles.",
      ],
      comment:
        "It's like a 'What's in my fridge' challenge gone wild! - Gordon Botsy",
    },
    {
      name: "Leftover Lover's Casserole",
      ingredients: ingredients.map((ing) => `${ing} - as available`),
      instructions: [
        "Preheat oven to 375°F (190°C).",
        "Chop all ingredients into bite-sized pieces.",
        "Mix everything in a large bowl.",
        "Transfer to a casserole dish and bake for 30 minutes.",
        "Let it cool slightly before serving.",
      ],
      comment: "It's like a culinary Frankenstein, but tastier! - Gordon Botsy",
    },
  ];

  return recipes;
}
