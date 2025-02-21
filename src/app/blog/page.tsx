import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Image
import Layout from "@/components/Layout";

export default function Blog() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title: data.title,
        date: data.date,
        image: data.image || "/images/default.jpg", // ✅ Default image if none provided
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <Layout>
      <div className="prose dark:prose-invert mx-auto p-6">
        

        <h1 className="text-4xl font-bold text-center">📚 Latest Blog Posts</h1>

        {/* Blog Post List with Images */}
        {posts.map((post) => (
          <div key={post.slug} className="border-b border-gray-300 py-4 flex items-center gap-4">
            <Image
              src={post.image}
              alt={post.title}
              width={80}
              height={80}
              className="rounded-lg object-cover"
            />
            <div>
              <h2 className="text-2xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-500">{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}