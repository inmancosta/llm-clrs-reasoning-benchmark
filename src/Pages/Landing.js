// src/Pages/Landing.js
import React from "react";
import NavBar from "../Components/NavBar";


const Landing = () => {
  return (
    <div>
      <NavBar />
      <main className="p-0 m-0">
        <section
          className="mb-8 bg-cover bg-center w-full min-h-74 md:h-64 lg:h-64"
          style={{ backgroundImage: 'url("/nodes.png")'}}
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
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/ataylor24/llm_algorithmic_reasoning" className="bg-blue-500 text-white py-2 px-4 rounded">
            Get Started
          </a>
          <a href="#" rel="noopener noreferrer" className="bg-blue-500 text-white py-2 px-4 rounded">
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
        <section className="mb-8 p-4 ">
          <div className="p-8  mx-auto max-w-screen-lg border-b">
            <h3 className="text-xl mb-2">Comprehensive Evaluation</h3>
            <p className="pb-12">
              The LLM-CLRS Benchmark provides a diverse set of challenging and
              realistic datasets designed to test the multistep reasoning
              capabilities of large language models (LLMs) on classical graph
              algorithms. These datasets cover a variety of sizes and
              complexities, ensuring a thorough evaluation of LLM performance on
              tasks such as Breadth-First Search (BFS), Depth-First Search
              (DFS), Dijkstra’s algorithm, Floyd-Warshall algorithm, and Prim’s
              Minimum Spanning Tree (MST-Prim).
            </p>
          </div>
        </section>
        <section className="mb-8 p-4 ">
          <div className="p-8 mx-auto max-w-screen-lg border-b">
            <h3 className="text-xl mb-2">Advanced Prompting Techniques</h3>
            <p className="pb-8">
              We explore various prompting strategies, including Input-Output
              (IO), Chain-of-Thought (CoT), Tree-of-Thought (ToT), and
              Graph-of-Thought (GoT), to assess their effectiveness in enhancing
              LLMs' reasoning abilities. These strategies provide the models
              with the necessary context and guidance to improve their
              performance on complex graph reasoning tasks.
            </p>
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
                target ="_blank"
                className="text-center bg-blue-500 text-white py-1 px-4 rounded mt-4"
              >
                Download paper here
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Landing;
