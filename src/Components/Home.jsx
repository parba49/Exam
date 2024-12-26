import React from 'react';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4">
      {/* Today's Quote Section */}
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-gradient-to-r from-rose-600 to-purple-600 p-6 text-white">
          <h2 className="mb-4 text-xl font-bold">Today's Quote</h2>
          <p className="mb-4 text-lg">
            "There is more treasure in books than in all the pirate's loot on Treasure Island."
          </p>
          <p className="text-sm opacity-90">-Walt Disney</p>
          <div className="mt-4 flex gap-1">
            <div className="h-2 w-2 rounded-full bg-white opacity-90"></div>
            <div className="h-2 w-2 rounded-full bg-white opacity-60"></div>
            <div className="h-2 w-2 rounded-full bg-white opacity-30"></div>
          </div>
        </div>

        {/* New Arrivals Section */}
        <div className="relative rounded-xl bg-gradient-to-r from-red-500 to-rose-600 p-6">
          <h3 className="mb-4 text-xl font-bold text-white">New Arrivals</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {[1, 2, 3, 4].map((book) => (
              <div
                key={book}
                className="h-32 w-24 flex-shrink-0 rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
              >
                <img
                  src={`https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg`}
                  alt={`Book ${book}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Good Morning Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Good Morning</h1>
      </div>

      {/* Recommended Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Recommended for You</h2>
          <button className="text-sm text-purple-600 hover:text-purple-700">Show All</button>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map((book) => (
            <div
              key={book}
              className="flex w-36 flex-shrink-0 flex-col gap-2"
            >
              <div className="h-48 w-36 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <img
                  src={`https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg`}
                  alt={`Book ${book}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div>
                {/* <h3 className="font-semibold text-gray-800">Book Title</h3> */}
                {/* <p className="text-sm text-gray-600">Author Name</p> */}
                <div className="mt-1 flex items-center">
                  <div className="rating rating-sm">
                    <input type="radio" name={`rating-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-${book}`} className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <span className="ml-1 text-sm text-gray-600">4.5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Readings Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">Recent Readings</h2>
          <button className="text-sm text-purple-600 hover:text-purple-700">Show All</button>
        </div>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
          {[1, 2, 3, 4, 5, 6].map((book) => (
            <div
              key={book}
              className="flex w-36 flex-shrink-0 flex-col gap-2"
            >
              <div className="h-48 w-36 rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
                <img
                  src={`https://c8.alamy.com/comp/HH0MP8/e-book-cover-design-concept-HH0MP8.jpg`}
                  alt={`Book ${book}`}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div>
                {/* <h3 className="font-semibold text-gray-800">Book Title</h3> */}
                {/* <p className="text-sm text-gray-600">Author Name</p> */}
                <div className="mt-1 flex items-center">
                  <div className="rating rating-sm">
                    <input type="radio" name={`rating-recent-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-recent-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-recent-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-recent-${book}`} className="mask mask-star-2 bg-orange-400" checked readOnly />
                    <input type="radio" name={`rating-recent-${book}`} className="mask mask-star-2 bg-orange-400" />
                  </div>
                  <span className="ml-1 text-sm text-gray-600">4.5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
};

export default Home;