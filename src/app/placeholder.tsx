"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Placeholder = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {[1, 2, 3].map((recipe, index) => (
        <Card
          key={index}
          className="flex flex-col border-sky-500 border-[1.5px]"
        >
          <CardHeader>
            <CardTitle>Apple Walnut Salad</CardTitle>
            <CardDescription className="italic">
              &quot;This salad is so boring, it makes watching paint dry seem
              like a thrill ride!&quot; - Gordon Botsy
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <h3 className="font-bold mb-2">Ingredients:</h3>
            <ul className="list-disc list-inside mb-4">
              {[
                "4 cups mixed greens",
                "1 apple, thinly sliced",
                "1 apple, thinly sliced",
              ].map((ingredient: string, i: number) => (
                <li key={i} className="text-sm">
                  {ingredient}
                </li>
              ))}
            </ul>
            <h3 className="font-bold mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside">
              {[
                "Drizzle balsamic vinaigrette over the salad and toss to combine.",
                "Drizzle balsamic vinaigrette over the salad and toss to combine.",
              ].map((step: string, i: number) => (
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
