const Book = ({ title, author, year, readerCount }) => {
    return (
      <p>
        I just read {title} by {author}, published in year {year}, has{" "}
        {readerCount} number of readers online.
      </p>
    );
  };
  
  export default Book;  