import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@/components/Layout";

// ✅ Server-side function to fetch the latest post
async function getLatestPost() {
  const postsDirectory = path.join(process.cwd(), "src/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md") || filename.endsWith(".mdx"))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx?$/, ""), // ✅ Remove .mdx/.md extension
        title: data.title,
        date: new Date(data.date), // ✅ Convert date to Date object
      };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime()); // ✅ Sort by latest first

  return posts.length > 0 ? posts[0] : null;
}

// ✅ Convert Home to an Async Component
export default async function Home() {
  const latestPost = await getLatestPost(); // 🔥 Fetch the latest post at build time

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center mt-12">
        <h1 className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">Welcome to Angelo's Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Exploring AI, Quant Finance, and Research.
        </p>

        {latestPost ? (
          <div className="mt-8 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{latestPost.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">Published on {latestPost.date.toDateString()}</p>
            <Link href={`/blog/${latestPost.slug}`}>
              <button className="mt-4 px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition">
                📖 Read Latest Post
              </button>
            </Link>
          </div>
        ) : (
          <p className="mt-8 text-gray-500 dark:text-gray-400">No blog posts available.</p>
        )}
      </section>
    </Layout>
  );
}