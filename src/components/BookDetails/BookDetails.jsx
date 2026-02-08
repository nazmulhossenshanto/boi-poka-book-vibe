import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList } from "../../Utility/addToDB";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseFloat(bookId);
  // console.log(id, typeof(id));
  const data = useLoaderData();
  // console.log(data);
  const book = data.find((b) => b.bookId == id);
  // console.log(book);
  const {
    bookId: currentBookId,
    image,
    category,
    bookName,
    author,
    review,
    tags,
    totalPages,
    rating,
    yearOfPublishing,
    publisher,
  } = book;
  const handleMarkAsRead = (id) => {
    addToStoredReadList(id)
  };
  return (
    <div className="flex justify-between items-center gap-5 my-10">
      {/* image div */}
      <div className="p-20 bg-base-300 rounded-lg">
        <img src={image} alt="" />
      </div>
      {/* content div */}
      <div className="w-full space-y-3">
        <h1 className="text-3xl font-bold">{bookName}</h1>
        <p className="text-xl font-bold">By : {author}</p>
        <div className="divider"></div>
        <p className="text-xl font-bold">{category}</p>
        <div className="divider"></div>
        <p><strong>Review</strong> : <span className="text-gray-500">{review}</span></p>
        <div className="flex items-center gap-5 font-bold">
          TAG{" "}
          {tags.map((t) => (
            <button className="btn bg-green-100 text-green-500 rounded-lg">#{t}</button>
          ))}
        </div>
        <div className="divider"></div>
        <p>Number of pages : <strong>{totalPages}</strong></p>
        <p>Publisher : <strong>{publisher}</strong></p>
        <p>Year of Publishing: <strong>{yearOfPublishing}</strong></p>
        <p>Rating: <strong>{rating} </strong></p>
        <div className="flex gap-10">
          <button
            onClick={()=>handleMarkAsRead(currentBookId)}
            className="btn btn-outline btn-accent"
          >
            Read
          </button>
          <button className="btn btn-success">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
