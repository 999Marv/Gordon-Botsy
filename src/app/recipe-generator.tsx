"use client";

import { useState } from "react";
import { Plus, Trash2, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { generateRecipes } from "./actions/generateRecipes";
import { Recipe } from "@/lib/types";
import { Recipes } from "@/app/recipes";
import { Placeholder } from "@/app/placeholder";

export default function RecipeGenerator() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
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
      setRecipes(generatedRecipes.recipes);
    } catch (error) {
      console.error("Error generating recipes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(recipes);

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold flex items-center">
            <ChefHat className="mr-2" />
            AI Recipe Generator
          </CardTitle>
          <CardDescription>
            Tell me what ingredients you have, and I&apos;ll whip up some
            delicious recipes!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2 mb-4">
            <Input
              type="text"
              value={currentIngredient}
              onChange={(e) => setCurrentIngredient(e.target.value)}
              placeholder="Enter an ingredient"
              onKeyDown={(e) => e.key === "Enter" && addIngredient()}
              className="flex-grow"
            />
            <Button onClick={addIngredient} className="flex-shrink-0">
              <Plus className="mr-2 h-4 w-4" /> Add
            </Button>
          </div>
          <ScrollArea className="h-24 w-full rounded-md border p-4">
            <div className="flex flex-wrap gap-2">
              {ingredients.map((ingredient, index) => (
                <span
                  key={index}
                  className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center"
                >
                  {ingredient}
                  <button
                    onClick={() => removeIngredient(index)}
                    className="ml-2 text-secondary-foreground/50 hover:text-secondary-foreground"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </span>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Button
        onClick={handleGenerateRecipes}
        disabled={ingredients.length === 0 || isLoading}
        className="w-full mb-8"
      >
        {isLoading ? "Cooking up ideas..." : "Generate Recipes"}
      </Button>
      {/* <Recipes recipes={recipes} /> */}
      <Placeholder />
    </div>
  );
}
