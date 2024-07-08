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
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg mb-6">
          <h1 className="text-4xl font-bold mb-4">Leaderboards</h1>
          <p className="mb-4">
            Public leaderboards allow researchers to keep track of
            state-of-the-art methods and encourage reproducible research.
          </p>
          <p className="font-bold mb-4">
            Important: Please make sure your experimental protocol follows the
            rules{" "}
            <a href="#" className="text-blue-500">
              here
            </a>
            .
          </p>

          <h2 className="text-xl font-bold mb-4">How Leaderboards Work?</h2>
          <p className="mb-4">
            Public leaderboards provide a platform for researchers to track the
            latest advancements in their field and promote reproducibility.
          </p>
          <p className="font-bold mb-4">
            Important: Ensure that your experimental procedures adhere to the
            guidelines outlined{" "}
            <a href="#" className="text-blue-500">
              here
            </a>
            .
          </p>

          <h2 className="text-xl font-bold mb-4">How Leaderboards Work?</h2>
          <p className="mb-4">
            After you have developed your model and obtained results, you can
            submit your test outcomes to our leaderboards. For each dataset,
            please provide the following information:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Leaderboard version:</strong> The version of the
              leaderboard used for the experiments.{" "}
              <strong>
                Ensure compatibility with the version requirements for each
                dataset.
              </strong>
            </li>
            <li>
              <strong>Method:</strong> The name of your method or algorithm.
            </li>
            <li>
              <strong>External data:</strong> If your model uses external data
              (such as pre-trained models, raw text, or labeled/unlabeled data),
              indicate this in your method name, e.g., ABC (trained on XYZ
              dataset).
            </li>
            <li>
              <strong>Dataset:</strong> The name of the dataset used to evaluate
              your method.
            </li>
            <li>
              <strong>Test performance:</strong> Report the raw test performance
              output, averaged over multiple runs. Ensure that you use different
              random seeds for a robust evaluation. For example, use{" "}
              <code className="bg-gray-200 p-1 rounded">random.seed</code> to
              generate different random seeds for each run.
            </li>
            <li>
              <strong>Validation performance:</strong> Provide the validation
              performance of your model as well.
            </li>
            <li>
              <strong>Contact:</strong> The name and email address of the
              contact person for this method.
            </li>
            <li>
              <strong>Code:</strong> Provide a link to the GitHub repository or
              directory containing all the code required to reproduce your
              results.{" "}
              <strong>Placeholder repositories are not allowed.</strong>
            </li>
            <li>
              <strong>Paper:</strong> Include a link to the original paper
              describing your method (an arXiv link is preferred, but
              peer-review is not mandatory). If your method combines existing
              techniques, document how you combined them in a technical report.
            </li>
            <li>
              <strong>#Params:</strong> Indicate the number of parameters in
              your model, calculated by{" "}
              <code className="bg-gray-200 p-1 rounded">
                sum(p.numel() for p in model.parameters())
              </code>
              . If using multi-stage training (e.g., node2vec followed by MLP),
              sum the parameters from each stage.
            </li>
            <li>
              <strong>Tuned hyper-parameters:</strong> Disclose all the
              hyper-parameters you tuned, and the values you tried for each. Use
              the following format:{" "}
              <code className="bg-gray-200 p-1 rounded">
                "lr: [0.001*, 0.01], num_layers: [4*,5], hidden_channels: [128,
                256*], dropout: [0*, 0.5], epochs: 400*, batch_size: 32*,
                early-stop"
              </code>
              , where the asterisks (*) indicate the tuned hyper-parameters.
            </li>
          </ul>
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
