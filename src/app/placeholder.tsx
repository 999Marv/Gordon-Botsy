"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Placeholder = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <Card
          key={index}
          className="animate-pulse border-gray-300 border-[1.5px]"
        >
          <CardHeader>
            <CardTitle className="h-6 bg-gray-300 rounded mb-2"></CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
