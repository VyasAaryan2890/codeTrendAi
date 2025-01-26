import React, { useState } from "react";

const Trends = () => {
  // Sample trending topics and articles data
  const [trends, setTrends] = useState([
    { id: 1, title: "React 18 Features", category: "JavaScript", description: "React 18 introduces automatic batching, concurrent rendering, and more." },
    { id: 2, title: "AI in Web Development", category: "AI", description: "How AI is revolutionizing the development landscape." },
    { id: 3, title: "Next.js 13", category: "Web Development", description: "Next.js 13 offers new app directory, React Server Components, and more." },
    { id: 4, title: "GraphQL Adoption", category: "API", description: "GraphQL continues to gain traction as an alternative to REST APIs." },
  ]);
  const [filteredCategory, setFilteredCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarkedTrends, setBookmarkedTrends] = useState([]);

  // Filter trends based on category and search query
  const filteredTrends = trends
    .filter((trend) =>
      trend.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((trend) =>
      filteredCategory ? trend.category === filteredCategory : true
    );

  // Toggle bookmark for a trend
  const toggleBookmark = (id) => {
    if (bookmarkedTrends.includes(id)) {
      setBookmarkedTrends(bookmarkedTrends.filter((trendId) => trendId !== id));
    } else {
      setBookmarkedTrends([...bookmarkedTrends, id]);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Explore Trends</h1>
      <p className="text-gray-700 mb-6">
        Stay updated with the latest coding trends and frameworks reshaping the development world.
      </p>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search trends..."
          className="p-2 border border-gray-300 rounded-md w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <label htmlFor="category" className="mr-4 font-semibold">Filter by Category:</label>
        <select
          id="category"
          className="p-2 border border-gray-300 rounded-md"
          value={filteredCategory}
          onChange={(e) => setFilteredCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="JavaScript">JavaScript</option>
          <option value="AI">AI</option>
          <option value="Web Development">Web Development</option>
          <option value="API">API</option>
        </select>
      </div>

      {/* Trending Topics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔥 Trending Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTrends.map((trend) => (
            <div
              key={trend.id}
              className="bg-white p-4 border rounded-md shadow hover:scale-105 transform transition-all"
            >
              <h3 className="font-bold text-lg">{trend.title}</h3>
              <p className="text-sm text-gray-600">{trend.description}</p>
              <span className="text-xs text-gray-500 mt-2 block">{trend.category}</span>
              <button
                onClick={() => toggleBookmark(trend.id)}
                className={`mt-4 text-sm ${bookmarkedTrends.includes(trend.id) ? 'text-yellow-600' : 'text-gray-500'} hover:underline`}
              >
                {bookmarkedTrends.includes(trend.id) ? "Unbookmark" : "Bookmark"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Articles Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📰 Latest Articles</h2>
        <div className="space-y-4">
          {/* Example articles (can be fetched from an API or blog) */}
          <div className="bg-white p-4 border rounded-md shadow hover:scale-105 transform transition-all">
            <h3 className="font-bold text-lg">Building Scalable Apps with React</h3>
            <p className="text-gray-600">Learn how to build scalable, high-performance React applications.</p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white p-4 border rounded-md shadow hover:scale-105 transform transition-all">
            <h3 className="font-bold text-lg">AI-Powered Development Tools</h3>
            <p className="text-gray-600">Explore how AI is transforming the way developers write code.</p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
          <div className="bg-white p-4 border rounded-md shadow hover:scale-105 transform transition-all">
            <h3 className="font-bold text-lg">GraphQL: Benefits and Use Cases</h3>
            <p className="text-gray-600">Understand the advantages of using GraphQL in modern web applications.</p>
            <a href="#" className="text-blue-600 hover:underline">Read more</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trends;
