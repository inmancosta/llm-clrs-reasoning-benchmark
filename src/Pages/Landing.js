// src/Pages/Landing.js
import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <main className="p-0 m-0">
        <section
          className="mb-8 bg-cover bg-center w-full min-h-74 md:h-64 lg:h-64"
          style={{ backgroundImage: 'url("/nodes1.jpeg")' }}
        >
          <div className="pt-12 pb-8 px-8 rounded-lg mx-auto max-w-screen-lg">
            <h2 className="text-5xl mb-4 mt-4">
              LLM-CLRS Graph Reasoning Benchmark
            </h2>
            <h3 className="text-2xl mb-4 mt-4">
              Benchmark datasets, data loaders, and evaluators for graph machine
              learning.
            </h3>
          </div>
        </section>
        <div className="mt-8 space-x-4 text-center">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/ataylor24/llm_algorithmic_reasoning"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            Get Started
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            LLM-CLRS
          </a>
        </div>
        <section className="mb-8 p-4 ">
          <div className="p-8  mx-auto max-w-screen-lg border-b">
            <p className="pb-12">
              <b>The LLM-CLRS Benchmark</b> is a comprehensive collection of
              challenging and diverse datasets designed to evaluate large
              language models (LLMs) on classical algorithmic reasoning tasks
              involving explicit graphs. These datasets are automatically
              processed and standardized to ensure consistent and reliable
              evaluation. The benchmark includes evaluations on five fundamental
              graph algorithms: <b>Breadth-First Search (BFS)</b>,{" "}
              <b>Depth-First Search (DFS)</b>, <b>Dijkstra’s algorithm</b>,{" "}
              <b>Floyd-Warshall algorithm</b>, and{" "}
              <b>Prim’s Minimum Spanning Tree (MST-Prim)</b> algorithm. These
              evaluations provide detailed insights into the step-by-step
              performance of LLMs, highlighting their strengths and areas for
              improvement in structured, multistep reasoning tasks.
              <b>The LLM-CLRS Benchmark</b> is a community-driven initiative
              that aims to advance the understanding and development of LLMs'
              problem-solving capabilities. To stay updated on major
              developments and improvements, join our community and subscribe to
              our updates.
            </p>
          </div>
        </section>
        <section className="mb-8 p-4">
          <div className="flex flex-wrap justify-between text-center mx-auto max-w-screen-lg border-b">
          <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
          <svg class="h-16 w-16 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="21 12 17 12 14 20 10 4 7 12 3 12" /></svg>
              <h3 className="text-xl font-semibold mb-2">
                Comprehensive Benchmark
              </h3>
              <p className="text-gray-700">
                Our benchmark is designed to assess the performance of Large
                Language Models (LLMs) on various classical graph algorithms.
                This ensures a thorough evaluation of their ability to
                understand and process graph-based data, providing a
                standardized way to measure and compare different models.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
            <svg class="h-16 w-16 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <line x1="9" y1="12" x2="9.01" y2="12" />  <line x1="13" y1="12" x2="15" y2="12" />  <line x1="9" y1="16" x2="9.01" y2="16" />  <line x1="13" y1="16" x2="15" y2="16" /></svg>
            
              <h3 className="text-xl font-semibold mb-2">
                Intermediate Steps Evaluation
              </h3>
              <p className="text-gray-700">
                We focus on the accuracy of the intermediate reasoning steps
                taken by LLMs, not just the final answers. This approach helps
                identify potential errors in their reasoning process and
                provides insights into how models process information, enhancing
                their overall problem-solving capabilities.
              </p>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 p-4 flex flex-col items-center">
            <svg class="h-16 w-16 text-indigo-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="14" cy="6" r="2" />  <line x1="4" y1="6" x2="12" y2="6" />  <line x1="16" y1="6" x2="20" y2="6" />  <circle cx="8" cy="12" r="2" />  <line x1="4" y1="12" x2="6" y2="12" />  <line x1="10" y1="12" x2="20" y2="12" />  <circle cx="17" cy="18" r="2" />  <line x1="4" y1="18" x2="15" y2="18" />  <line x1="19" y1="18" x2="20" y2="18" /></svg>
              <h3 className="text-xl font-semibold mb-2">
                Advanced Prompting Techniques
              </h3>
              <p className="text-gray-700">
                We explore sophisticated prompting methods to guide LLMs in
                performing graph algorithms. This includes providing
                step-by-step instructions, structured hints, and multi-step
                prompts. These techniques aim to enhance the model's
                understanding and execution of graph algorithms, making them
                more effective and reliable in solving complex problems.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-8 p-4">
          <div className="p-8 rounded-lg mx-auto max-w-screen-lg">
            <div className="bg-gray-100 p-4 rounded-lg mb-8">
              <div>
                <h4 className="text-lg mb-2">LLM-CLRS paper</h4>
                <p className="mb-4">
                  presents the datasets, benchmark experiments, and research
                  opportunities.
                </p>
              </div>
              <a
                rel="noopener noreferrer"
                href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/student-annotated.pdf"
                target="_blank"
                className="text-center bg-blue-500 text-white py-1 px-4 rounded mt-4"
              >
                Download paper here
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
