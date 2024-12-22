"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Recipe } from "@/lib/types";

export const Recipes = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe, index) => (
        <Card
          key={index}
          className="flex flex-col border-sky-500 border-[1.5px]"
        >
          <CardHeader>
            <CardTitle className="pb-3">{recipe.name}</CardTitle>
            <CardDescription className="italic">
              &quot;{recipe.botsy}&quot; - Gordon Botsy
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <h3 className="font-bold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {recipe.ingredients.map((ingredient: string, i: number) => (
                <li key={i} className="text-sm">
                  {ingredient}
                </li>
              ))}
            </ul>
            <h3 className="font-bold mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside">
              {recipe.instructions.map((step: string, i: number) => (
                <li key={i} className="text-sm mb-1">
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
