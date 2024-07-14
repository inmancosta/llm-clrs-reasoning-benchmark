import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";

export const BenchmarkLeaderboard = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tsbozai", "template_3kqgizf", form.current, {
        publicKey: "4YPnl-0M9319XJlHI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("SUCCESS");
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("FAILED");
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow p-6">
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg mb-10">
          <h1 className="text-4xl font-bold mb-4">Features</h1>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Comprehensive Benchmark:</strong> Evaluates LLM
              performance on classical graph algorithms.
            </li>
            <li>
              <strong>Intermediate Steps Evaluation:</strong> Focuses on the
              accuracy of intermediate reasoning steps.
            </li>
            <li>
              <strong>Multiple Algorithms:</strong> Includes BFS, DFS,
              Dijkstra's, Floyd-Warshall, and Prim's MST.
            </li>
            <li>
              <strong>Advanced Prompting Techniques:</strong> Explores advanced
              prompting techniques and algorithmic instructions.
            </li>
          </ul>

          <div className="my-6"></div>
          
          <h1 className="text-4xl font-bold mb-4">Installation Process</h1>
          <h2 className="text-xl font-bold mb-4">Prerequisites</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Python 3.10 or higher</li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Clone the Repository</h2>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              git clone
              https://github.com/yourusername/LLM-CLRS-Graph-Reasoning-Benchmark.git
            </code>
          </p>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              cd LLM-CLRS-Graph-Reasoning-Benchmark
            </code>
          </p>

          <h2 className="text-xl font-bold mb-4">Create a Conda Environment</h2>
          <p className="mb-4">
            To create a Conda environment with the required dependencies, run
            the following command:
          </p>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              conda env create --file environment.yml
            </code>
          </p>
          <p className="mb-4">
            This will create a new Conda environment with all the dependencies
            specified in the environment.yml file.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Activate the Conda Environment
          </h2>
          <p className="mb-4">Activate the newly created environment using:</p>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              conda activate llm_gar
            </code>
          </p>

          <h2 className="text-xl font-bold mb-4">Training Baseline Models</h2>
          <p className="mb-4">
            An example of a script used to run the benchmark on the included
            algorithms is included in run_scripts.
          </p>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              bash run_scripts/bfs_CoT.sh
            </code>
          </p>

          <h2 className="text-xl font-bold mb-4">
            Running Inference with Trained Models
          </h2>
          <p className="mb-4">
            An example of a script used to run the benchmark on a selected
            algorithm is included in inference_scripts.
          </p>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              bash inference_scripts/bfs_CoT.sh
            </code>
          </p>

          <h2 className="text-xl font-bold mb-4">Configuration</h2>
          <p className="mb-4">
            You can customize the benchmark settings using the configuration
            file:
          </p>
          <p className="mb-4">
            <code className="bg-gray-200 p-1 rounded">
              configuration_example/config_qlora.yaml
            </code>
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-xl font-bold mb-4">Submitting Results?</h2>
          <p className="mb-4">
            Please submit your results by filling out the form below:
          </p>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="user_name"
              >
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="user_email"
              >
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <input
                type="submit"
                value="Send"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
          {status === "SUCCESS" && (
            <p className="text-green-500 mt-4">
              Your message has been sent successfully!
            </p>
          )}
          {status === "FAILED" && (
            <p className="text-red-500 mt-4">
              Failed to send your message. Please try again.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BenchmarkLeaderboard;
