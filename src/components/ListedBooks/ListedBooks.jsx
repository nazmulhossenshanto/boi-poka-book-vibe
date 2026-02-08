import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addToDB";
import BookCard from "../BookCard/BookCard";

const ListedBooks = () => {
  const [bookReadList, setBookReadList] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const readList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId),
    );
    setBookReadList(readList);
  }, [allBooks]);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>ReadList </Tab>
          <Tab>WishList</Tab>
        </TabList>

        <TabPanel>
          <h2>Books I read {bookReadList.length}</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
            {
          bookReadList.map((book) => (
            <BookCard key={book.bookId} book={book} />
          ))
          }
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
