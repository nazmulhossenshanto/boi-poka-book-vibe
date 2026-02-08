import React from "react";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  const {bookId, bookName, author, image, rating, category } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div>
        <div className="card  hover:scale-105 transition   shadow-xl border border-gray-400 rounded-xl p-5">
          <figure className="bg-base-200 ">
            <img src={image} className="h-41.5 " alt="Shoes" />
          </figure>
          <div className="card-body space-y-3 ">
            <div className="flex ">
              <button className="btn btn-active btn-success text-xl">
                Young Adult
              </button>
              <button className="ml-5 btn btn-active btn-success text-xl">
                Identity
              </button>
            </div>
            <h2 className="text-2xl font-semibold">{bookName}</h2>
            <p className="text-gray-600 text-xl">By : {author}</p>
            <p className="border boder-b border-dashed"></p>
            <div className="flex justify-between items-center">
              <h3>{category}</h3>
              <h3>{rating} </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
