import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addToDB";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const [bookReadList, setBookReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId),
    );
    setBookReadList(readList);
  }, [allBooks]);
  const handleSort = (sortType) => {
    setSort(sortType);
    if (sortType == "Pages") {
      const sortedReadList = [
        ...bookReadList.sort((a, b) => a.totalPages - b.totalPages),
      ];
      setBookReadList(sortedReadList);
    }
    if (sortType == "Ratings") {
      const sortedReadList = [
        ...bookReadList.sort((a, b) => a.rating - b.rating),
      ];
      setBookReadList(sortedReadList);
    }
  };
  return (
    <div>
      <div className="dropdown flex justify-center my-3">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `sort by : ${sort}` : "sort by"}
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => handleSort("Ratings")}>
            <a>Ratings</a>
          </li>
          <li onClick={() => handleSort("Pages")}>
            <a>Number of pages</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>ReadList </Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read {bookReadList.length}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {bookReadList.map((book) => (
              <BookCard key={book.bookId} book={book} />
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Wish listed books</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
