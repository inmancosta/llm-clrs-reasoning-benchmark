import React from 'react';
import NavBar from '../Components/NavBar';  // Adjust the import path if needed

const IntermediateStepsAccuracy = () => {
  return (
    <>
      <NavBar />
      <div className="pt-24 flex flex-col items-center">  {/* Added padding top to account for fixed navbar */}
        <h2 className="text-xl font-bold mb-4">Intermediate Steps Accuracy</h2>
        <p className="mb-4">Evaluates the accuracy of intermediate steps:</p>
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="min-w-full text-sm border border-gray-300 font-sans">
            <thead>
              <tr className="bg-blue-900 text-white font-bold">
                <th className="border border-gray-300 p-2">Rank</th>
                <th className="border border-gray-300 p-2">GPT-4</th>
                <th className="border border-gray-300 p-2">Training Accuracy</th>
                <th className="border border-gray-300 p-2">Testing Accuracy</th>
                <th className="border border-gray-300 p-2">Team Name</th>
                <th className="border border-gray-300 p-2">Link To Paper</th>
                <th className="border border-gray-300 p-2"># of Params</th>
                <th className="border border-gray-300 p-2">Hardware</th>
                <th className="border border-gray-300 p-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">2</td>
                <td className="border border-gray-300 p-2">BERT</td>
                <td className="border border-gray-300 p-2">0.8737 ± 0.0006</td>
                <td className="border border-gray-300 p-2">0.9400 ± 0.0003</td>
                <td className="border border-gray-300 p-2">Jianan Zhao (Mila & MSRA Team)</td>
                <td className="border border-gray-300 p-2">sjsjsjs</td>
                <td className="border border-gray-300 p-2">82429</td>
                <td className="border border-gray-300 p-2">GeForce RTX 3090</td>
                <td className="border border-gray-300 p-2">Oct 27, 2022</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">3</td>
                <td className="border border-gray-300 p-2">RoBERTa</td>
                <td className="border border-gray-300 p-2">0.8737 ± 0.0006</td>
                <td className="border border-gray-300 p-2">0.9400 ± 0.0003</td>
                <td className="border border-gray-300 p-2">Jianan Zhao (Mila & MSRA Team)</td>
                <td className="border border-gray-300 p-2">shshsh</td>
                <td className="border border-gray-300 p-2">29839328</td>
                <td className="border border-gray-300 p-2">GeForce RTX 3090</td>
                <td className="border border-gray-300 p-2">Oct 27, 2022</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">4</td>
                <td className="border border-gray-300 p-2">T5</td>
                <td className="border border-gray-300 p-2">0.8737 ± 0.0006</td>
                <td className="border border-gray-300 p-2">0.9400 ± 0.0003</td>
                <td className="border border-gray-300 p-2">Jianan Zhao (Mila & MSRA Team)</td>
                <td className="border border-gray-300 p-2">hshshsh</td>
                <td className="border border-gray-300 p-2">2939838</td>
                <td className="border border-gray-300 p-2">GeForce RTX 3090</td>
                <td className="border border-gray-300 p-2">Oct 27, 2022</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default IntermediateStepsAccuracy;
