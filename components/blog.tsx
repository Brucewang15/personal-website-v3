"use client";

import { GradientText } from "./effects/GradientText";

export default function BlogComponent() {
  return (
    <div className="mt-8 space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold">
        <GradientText>Blog</GradientText>
      </h1>
      <div>Work in progress</div>
    </div>
  );
}