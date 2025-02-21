import Layout from "@/components/Layout";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Hi, I’m Angelo, an MSc Computational Finance student at UCL with a strong background in quantitative modeling, machine learning, and financial engineering.
        My work revolves around algorithmic trading, reinforcement learning, and market microstructure.
        This blog serves as a space where I share research, coding projects, and insights on AI and quantitative finance.
      </p>

      {/* 🔹 Download CV Button */}
      <div className="mt-6 text-center">
        <Link href="/Angelo_CV.pdf" download>
          <button className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-400 transition">
            📄 View My CV
          </button>
        </Link>
      </div>

      {/* 🔹 Key Skills Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Key Skills</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Programming:</strong> Python, SQL, Excel, LaTeX, TensorFlow, PyTorch</li>
          <li><strong>Quantitative Techniques:</strong> Monte Carlo, Time Series Analysis, Stochastic Calculus</li>
          <li><strong>Machine Learning:</strong> Deep Learning, Reinforcement Learning, Neural Networks</li>
          <li><strong>Financial Modeling:</strong> Derivatives Pricing (Black-Scholes, Heston, Variance Gamma)</li>
        </ul>
      </div>

      {/* 🔹 Projects & Research */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Projects & Research</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>📌 High-Performance Limit Order Book Matching Engine – Designed an optimized LOB processing 320,000+ orders/sec.</li>
          <li>📌 Reinforcement Learning for Market Making – Built an RL-based execution algorithm using A2C and Avellaneda-Stoikov models.</li>
          <li>📌 Financial Derivatives Pricing Platform – Developed an interactive option pricing tool using Streamlit.</li>
        </ul>
      </div>
    </Layout>
  );
}