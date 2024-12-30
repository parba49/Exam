import React, { useState, useEffect } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);


  const fetchBooks = async () => {
    
    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          searchTerm
        )}`
      );
      const data = await response.json();
      const { docs } = data;

      const booksWithDetails = docs.map((book) => ({
        id: book.key,
        title: book.title,
        author: book.author_name ? book.author_name.join(", ") : "U/A",
        categories: book.subject ? book.subject.join(", ") : "U/C",
        coverImg: book.cover_i
          ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
          : "https://via.placeholder.com/150?text=No+Cover",
        description: book.first_sentence
          ? book.first_sentence[0]
          : "No description available.",
        ratings: book.ratings_average ? book.ratings_average.toFixed(1) : "0.0",
        publishYear: book.first_publish_year || "N/A",
        hardCopy: book.availability?.physical || false,
        eBook: book.availability?.is_ebook || false,
        status: book.availability?.status || "Unknown",
      }));

      setBooks(booksWithDetails);
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Book Search</h1>
      <form onSubmit={handleSearch} className="flex items-center mb-4 gap-2">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
        >
          Search
        </button>
      </form>

      {loading ?  (
        <div ></div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
          <div className="lg:grid lg:grid-cols-[332px_repeat(6,_1fr)] lg:font-medium hidden">
            
            <div>Title</div>
            <div>Ratings</div>
            <div>Category</div>

          </div>
          {books.map((book) => (
            <div
              key={book.id}
              className="border border-gray-300 rounded-md p-4 flex flex-col lg:grid lg:grid-cols-[300px_repeat(6,_1fr)] gap-4 bg-white items-center cursor-pointer"
            >
              <div className="flex flex-col lg:flex-row items-center gap-4">
                <img
                  src={book.coverImg}
                  alt={`${book.title} cover`}
                  className="w-auto lg:w-10 lg:h-auto object-cover mb-4 rounded-[10px] lg:rounded-[5px]"
                />
                <div className="text-center lg:text-left">
                  <h3 className="font-normal text-lg">{book.title}</h3>
                  <p className="text-gray-600 text-base">
                    {book.author.split(",")[0]}, {book.publishYear}
                  </p>
                </div>
              </div>
              <p className="text-gray-600">
                {book.ratings}
                <span className="text-gray-400 text-[12px]">/5</span>
              </p>
              <p className="text-gray-600">{book.categories.split(",")[0]}</p>
             
              <button className="bg-orange-400">
                Preview
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;