"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { generateRecipes } from "./actions/generateRecipes";

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipes, setRecipes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addIngredient = () => {
    if (currentIngredient.trim()) {
      setIngredients([...ingredients, currentIngredient.trim()]);
      setCurrentIngredient("");
    }
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleGenerateRecipes = async () => {
    if (ingredients.length === 0) return;

    setIsLoading(true);
    try {
      const generatedRecipes = await generateRecipes(ingredients);
      setRecipes(generatedRecipes);
    } catch (error) {
      console.error("Error generating recipes:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">AI Recipe Generator</h1>

      <div className="mb-6">
        <div className="flex space-x-2 mb-2">
          <Input
            type="text"
            value={currentIngredient}
            onChange={(e) => setCurrentIngredient(e.target.value)}
            placeholder="Enter an ingredient"
            onKeyPress={(e) => e.key === "Enter" && addIngredient()}
          />
          <Button onClick={addIngredient}>Add</Button>
        </div>
        <div className="flex flex-wrap gap-2">
          {ingredients.map((ingredient, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded">
              {ingredient}
              <button
                onClick={() => removeIngredient(index)}
                className="ml-2 text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <Button
        onClick={handleGenerateRecipes}
        disabled={ingredients.length === 0 || isLoading}
      >
        {isLoading ? "Generating..." : "Generate Recipes"}
      </Button>

      <div className="mt-8 space-y-6">
        {recipes.map((recipe, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{recipe.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="italic mb-4">
                &quot;{recipe.comment}&quot; - Gordon Botsy
              </p>
              <h3 className="font-bold mb-2">Ingredients:</h3>
              <ul className="list-disc list-inside mb-4">
                {recipe.ingredients.map((ingredient: string, i: number) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <h3 className="font-bold mb-2">Instructions:</h3>
              <ol className="list-decimal list-inside">
                {recipe.instructions.map((step: string, i: number) => (
                  <li key={i}>{step}</li>
                ))}
              </ol>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
