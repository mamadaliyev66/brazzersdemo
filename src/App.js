import React from "react";

const App = () => {
  const items = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Video ${i + 1}`,
    thumbnail: "https://via.placeholder.com/300x200",
  }));

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
        <div className="text-2xl font-bold">Brazzers</div>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#categories" className="hover:text-gray-400">Categories</a>
          <a href="#premium" className="hover:text-gray-400">Premium</a>
        </nav>
        <button className="px-4 py-2 bg-red-600 rounded-md hover:bg-red-700">Sign In</button>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            Stream Exclusive Content
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Enjoy premium entertainment anytime, anywhere.
          </p>
          <button className="mt-6 px-6 py-3 bg-red-600 rounded-lg text-lg hover:bg-red-700">
            Explore Now
          </button>
        </div>
      </section>

      {/* Content Grid */}
      <section id="categories" className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6">Popular Content</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div key={item.id} className="group relative">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="rounded-md w-full h-auto"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-6">
        <div className="text-center text-sm text-gray-400">
          © 2024 Brazzers. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
