"use client"; // ✅ Mark this as a Client Component

import { MDXProvider } from "@mdx-js/react";
import React from "react";

export default function BlogContent({ content }: { content: string }) {
  return (
    <MDXProvider>
      <div className="prose dark:prose-invert">
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </MDXProvider>
  );
}
