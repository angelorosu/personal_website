import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import Image from "next/image"; // ✅ Import Image
import Link from "next/link";

export default async function BlogPost({ params }: { params: { slug: string } }) {
    params = await params; // Ensure params is awaited
  const postPath = path.join(process.cwd(), "src/posts", `${params.slug}.mdx`);

  if (!fs.existsSync(postPath)) {
    return <h1 className="text-center text-2xl font-bold text-red-600 mt-12">❌ 404 - Post Not Found</h1>;
  }

  const source = fs.readFileSync(postPath, "utf8");
  const { content, data } = matter(source);

  return (
    <div className="prose dark:prose-invert mx-auto p-6">
      {/* ✅ Back to Blog Button */}
      <Link href="/blog" className="inline-block mb-4 px-4 py-2 bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-900 rounded-md hover:bg-gray-900 dark:hover:bg-gray-200 transition">
        ⬅️ Back to Blog
      </Link>

      {/* ✅ Featured Image */}
      {data.image && (
        <Image src={data.image} alt={data.title} width={800} height={400} className="rounded-lg mx-auto" />
      )}

      <h1 className="text-4xl font-bold">{data.title}</h1>
      <p className="text-gray-500">{new Date(data.date).toDateString()}</p>

      <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}