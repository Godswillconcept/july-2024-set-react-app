import Book from "./Book";

const Library = () => {
  const books = [
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      year: 1968,
      readerCount: 100000,
    },
    {
      title: "Essential Physics",
      author: "Leonard Duck",
      year: 1999,
      readerCount: 20000,
    },
    {
      title: "Essential Biology",
      author: "John Doe",
      year: 2010,
      readerCount: 10000,
    },
    {
      title: "Essential Psychology",
      author: "Jane Smith",
      year: 2015,
      readerCount: 50000,
    },
    {
      title: "Essential Engineering",
      author: "Tom Johnson",
      year: 2018,
      readerCount: 150000,
    },
    {
      title: "Essential Art",
      author: "Sarah Lee",
      year: 2020,
      readerCount: 20000,
    },
    {
      title: "Essential History",
      author: "John Adams",
      year: 1990,
      readerCount: 300000,
    },
  ];
  return (
    <>
      
      <Book
        title={"Things Fall Apart"}
        author={"Chinua Achebe"}
        year={1968}
        readerCount={100000}
      />

      {books.map((el) => (
        <Book
          title={el.title}
          author={el.author}
          year={el.year}
          readerCount={el.readerCount}
        />
      ))}
    </>
  );
};

export default Library;
