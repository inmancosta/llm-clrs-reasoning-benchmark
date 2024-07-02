// src/Pages/Landing.js
import React from "react";
import NavBar from "../Components/NavBar";

const Landing = () => {
  return (
    <div>
      <NavBar />
      <main className="p-0 m-0">
        <section
          className="mb-8 bg-cover bg-center w-full h-64 md:h-64 lg:h-64"
          style={{ backgroundImage: 'url("/nodes.png")' }}
        >
          <div className="p-8 rounded-lg ml-16 md:ml-8">
            <h2 className="text-4xl mb-4 mt-4">
              LLM-CLRS Graph Reasoning Benchmark
            </h2>
            <p>
              Benchmark datasets, data loaders, and evaluators for graph machine
              learning.
            </p>
            <div className="mt-8 space-x-4">
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
                Get Started
              </a>
              <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded">
                OGB-LSC
              </a>
            </div>
          </div>
        </section>
        <section className="mb-8 p-4">
          <h3 className="text-xl mb-2">Realistic datasets</h3>
          <p>
            OGB provides a diverse set of challenging and realistic benchmark
            datasets that are of varying sizes and cover a variety of graph
            machine learning tasks, including prediction of node, link, and
            graph properties.
          </p>
        </section>
        <section className="mb-8 p-4">
          <h3 className="text-xl mb-2">Flexible data loaders</h3>
          <p>
            OGB fully automates dataset processing. The OGB data loaders
            automatically download and process graphs, provide graph objects
            that are fully compatible with PyTorch Geometric and DGL.
          </p>
        </section>
        <section className="mb-8 p-4">
          <h3 className="text-xl mb-2">Unified evaluation</h3>
          <p>
            OGB provides standardized dataset splits and evaluators that allow
            for easy and reliable comparison of different models in a unified
            manner. OGB uses leaderboards to keep track of the state-of-the-art.
          </p>
        </section>
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <div>
            <h4 className="text-lg mb-2">OGB paper</h4>
            <p>
              presents the datasets, benchmark experiments, and research
              opportunities.
            </p>
          </div>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Download paper here
          </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <div>
            <h4 className="text-lg mb-2">OGB-LSC paper</h4>
            <p>
              presents the large-scale graph challenge datasets used in the KDD
              Cup 2021.
            </p>
          </div>
          <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded mt-4">
            Download paper here
          </a>
        </div>
      </main>
    </div>
  );
};

export default Landing;
