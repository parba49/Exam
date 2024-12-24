import React from 'react';

const MySelf = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Your <span className="text-orange-500">Shelf</span>
          </h1>
          
          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 mt-6">
            <button className="px-4 py-2 text-sm font-medium text-gray-900 border-b-2 border-orange-500">
              All Books
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
              Favourite
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
              Borrowed Books
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700">
              E-Books
            </button>
          </div>
        </div>
  
        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Book Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-[3/4] relative">
              <img
                src="https://marketplace.canva.com/EAFfSnGl7II/2/0/1003w/canva-elegant-dark-woods-fantasy-photo-book-cover-vAt8PH1CmqQ.jpg"
                alt="Book cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">WALK INTO THE SHADOW</h3>
              <p className="text-sm text-gray-500 mb-4">Steve Krug, 2000</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Borrowed on</span>
                  <span>17 Mar 2023 09:00 AM</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Submission Due</span>
                  <span>24 Mar 2023</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                  Borrowed
                </span>
                <button className="px-4 py-1 text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Return
                </button>
              </div>
            </div>
          </div>
  
          {/* E-Book Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-[3/4] relative">
              <img
                src="https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg"
                alt="Book cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">SOUL</h3>
              <p className="text-sm text-gray-500 mb-4">OLIVIA WILSON</p>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Borrowed on</span>
                  <span>17 Mar 2023 09:00 AM</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Submission Due</span>
                  <span>24 Mar 2023</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                  E-BOOK
                </span>
                <button className="px-4 py-1 text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Read
                </button>
              </div>
            </div>
          </div>



          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-[3/4] relative">
              <img
                src="https://c8.alamy.com/comp/HH0MP8/e-book-cover-design-concept-HH0MP8.jpg"
                alt="Book cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">E-BOOK</h3>
              {/* <p className="text-sm text-gray-500 mb-4">Steve Krug, 2000</p> */}
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Borrowed on</span>
                  <span>17 Mar 2023 09:00 AM</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Submission Due</span>
                  <span>24 Mar 2023</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                  Borrowed
                </span>
                <button className="px-4 py-1 text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Return
                </button>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="aspect-[3/4] relative">
              <img
                src="https://c8.alamy.com/comp/FE1TBD/art-notes-for-1896-art-nouveau-book-cover-design-by-arthur-maude-of-FE1TBD.jpg"
                alt="Book cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">ART NOTES</h3>
              {/* <p className="text-sm text-gray-500 mb-4">Steve Krug, 2000</p> */}
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Borrowed on</span>
                  <span>17 Mar 2023 09:00 AM</span>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Submission Due</span>
                  <span>24 Mar 2023</span>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded">
                  Borrowed
                </span>
                <button className="px-4 py-1 text-sm text-orange-500 hover:text-orange-600 font-medium">
                  Return
                </button>
              </div>
            </div>
          </div>




        </div>
      </div>
    );
};

export default MySelf;