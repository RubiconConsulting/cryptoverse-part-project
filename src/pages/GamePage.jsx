import GameBoard from "../components/GameBoard";
import Navbar from "../components/Navbar";

const GamePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-900 text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-full my-5">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Into The Cryptoverse
        </h1>
        <p className="text-lg mb-12 text-center">
          Experience the thrill of Monopoly with a blockchain twist!
        </p>
        <div className="px-8 py-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
          Start Playing
        </div>

        <div className="my-4 w-full mx-auto">
          <GameBoard />
        </div>
      </div>
    </div>
  );
};

export default GamePage;
