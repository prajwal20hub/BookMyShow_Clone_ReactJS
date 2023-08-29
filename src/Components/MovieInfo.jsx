import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import PaymentModel from "./PaymentModel";

const MovieInfo = ({ movie }) => {
  const { price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  return (
    <>
      <PaymentModel setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl font-bold">
          {movie.original_title}
        </h1>
        <div className="flex  flex-col gap-2 text-white">
          <h4>4k rating</h4>
          <h4>English, Hindi, German, Russian, Spanish</h4>
          <h4>
            {" "}
            {movie.runtime} min | {genres}
          </h4>
        </div>
      </div>

      <div className="flex items-center mt-4 gap-3 w-96">
        <button
          onClick={rentMovie}
          className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"
        >
          Rent ₹169
        </button>
        <button
          onClick={buyMovie}
          className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"
        >
          Buy ₹699
        </button>
      </div>
    </>
  );
};

export default MovieInfo;
