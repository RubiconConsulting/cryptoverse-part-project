import React from "react";
import hero_img from "../assets/hero-char.svg";
import game_img from "../assets/OIG3.0j0fUOjKjX3hAUm 1.svg";
import PlayNowButton from "../components/PlayNowBtn";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-indigo-900 text-white my-0">
      <section className="flex flex-wrap gap-12 justify-center items-center">
        <div className="flex flex-col w-[50%]">
          <span className="text-6xl my-3">Into the Cryptoverse</span>
          <span className="text-4xl my-2 text-gray-500">
            The most interactive educational game in Africa
          </span>
          <span className="text-2xl w-[70%] my-4">
            Into the Cryptoverse is a crypto game designed to educate people on
            Blockchain & Cryptocurrency in a Fun & Interactive way
          </span>
        </div>
        <div>
          <img src={hero_img} alt="" className="w-[500px] h-[500px]" />
        </div>
      </section>

      <section className="my-2  p-6 text-white rounded-lg shadow-md">
        <div></div>
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <img
              src={game_img}
              alt="Game"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="w-1/2 pl-6">
            <h2 className="text-4xl font-bold mb-4 text-yellow-400">
              Cryptoverse
            </h2>
            <p className="text-xl mb-4">
              Challenge your friends and test your knowledge of blockchain
              technology in Blockchain Monopoly! This exciting game combines
              strategy and trivia as you race to the finish line. Answer
              blockchain-related questions to move forward, acquire properties,
              and avoid pitfalls.
            </p>
            <p className="text-lg mt-4">
              Play with 2-8 players and see who can master the blockchain first!
              Are you ready to roll the dice and prove your blockchain
              knowledge? Let the game begin!
            </p>
            <Link to={"/rubipoly"}>
              <PlayNowButton />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
