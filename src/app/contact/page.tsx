import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
        Feel free to reach out at <a href="mailto:angelo@email.com" className="text-blue-600 dark:text-blue-400">angelo.rosu2001@email.com</a>.
      </p>
    </Layout>
  );
}
