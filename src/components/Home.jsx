import React, { useState, useEffect } from "react";

// Skeleton loader component
const Skeleton = ({ width = "100%", height = "100%" }) => {
  return (
    <div
      className="bg-gray-200 animate-pulse"
      style={{ width, height }}
    ></div>
  );
};

const Home = () => {
  const [username, setUsername] = useState(localStorage.getItem("username") || "");
  const [trendingTopics, setTrendingTopics] = useState(() => {
    const savedTopics = localStorage.getItem("trendingTopics");
    return savedTopics ? JSON.parse(savedTopics) : [];
  });
  const [recommendedResources, setRecommendedResources] = useState(() => {
    const savedResources = localStorage.getItem("recommendedResources");
    return savedResources ? JSON.parse(savedResources) : [];
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [newTopic, setNewTopic] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newResource, setNewResource] = useState({ title: "", description: "" });

  // Search filter for topics and resources
  const filteredTopics = trendingTopics.filter((topic) =>
    topic.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredResources = recommendedResources.filter((resource) =>
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      const updatedTopics = [
        { topic: "Updated React.js Trends", description: "Latest trends in React.js", username: localStorage.getItem("username") || "" },
        { topic: "AI in DevOps", description: "AI's role in DevOps processes", username: localStorage.getItem("username") || "" },
        { topic: "Cloud Computing", description: "The future of cloud technologies", username: localStorage.getItem("username") || "" },
        { topic: "GraphQL Best Practices", description: "Best practices for using GraphQL", username: localStorage.getItem("username") || "" }
      ];
      const updatedResources = [
        { title: "Advanced React Concepts", description: "Take your React skills to the next level.", username: localStorage.getItem("username") || "" },
        { title: "AI in Software Testing", description: "Learn how AI can help automate testing.", username: localStorage.getItem("username") || "" },
        { title: "Building Scalable APIs", description: "Create scalable, reliable APIs with Node.js.", username: localStorage.getItem("username") || "" },
        { title: "GraphQL Subscriptions", description: "Learn about real-time data in GraphQL.", username: localStorage.getItem("username") || "" }
      ];

      setTrendingTopics(updatedTopics);
      setRecommendedResources(updatedResources);
      localStorage.setItem("trendingTopics", JSON.stringify(updatedTopics));
      localStorage.setItem("recommendedResources", JSON.stringify(updatedResources));
    } catch (err) {
      console.error("Error updating data:", err);
      setError("Could not update data.");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAddTopic = () => {
    if (newTopic.trim() && newDescription.trim()) {
      const newTopicObj = { topic: newTopic, description: newDescription, username: localStorage.getItem("username") || "" };
      const updatedTopics = [...trendingTopics, newTopicObj];
      setTrendingTopics(updatedTopics);
      localStorage.setItem("trendingTopics", JSON.stringify(updatedTopics));
      setNewTopic("");
      setNewDescription("");
    }
  };

  const handleAddResource = () => {
    if (newResource.title.trim() && newResource.description.trim()) {
      const newResourceObj = { title: newResource.title, description: newResource.description, username: localStorage.getItem("username") || "" };
      const updatedResources = [...recommendedResources, newResourceObj];
      setRecommendedResources(updatedResources);
      localStorage.setItem("recommendedResources", JSON.stringify(updatedResources));
      setNewResource({ title: "", description: "" });
    }
  };

  const handleRemoveTopic = (index) => {
    const updatedTopics = [...trendingTopics];
    updatedTopics.splice(index, 1);
    setTrendingTopics(updatedTopics);
    localStorage.setItem("trendingTopics", JSON.stringify(updatedTopics));
  };

  const handleRemoveResource = (index) => {
    const updatedResources = [...recommendedResources];
    updatedResources.splice(index, 1);
    setRecommendedResources(updatedResources);
    localStorage.setItem("recommendedResources", JSON.stringify(updatedResources));
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
    localStorage.setItem("username", newUsername);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Welcome to CodeTrendAI</h1>

      {/* Display Username */}
      <div className="mb-6">
        {username ? (
          <h2 className="text-2xl">Hello, {username}!</h2>
        ) : (
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Set Your Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Enter your username"
              className="w-full p-4 border border-gray-300 rounded-md"
            />
          </div>
        )}
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Topics or Resources"
          className="w-full p-4 border border-gray-300 rounded-md"
        />
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 mb-6">{error}</p>}

      {/* Add New Topic */}
      <div className="mb-6">
        <input
          type="text"
          value={newTopic}
          onChange={(e) => setNewTopic(e.target.value)}
          placeholder="Add new trending topic"
          className="w-full p-4 border border-gray-300 rounded-md"
        />
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Topic description"
          className="w-full p-4 border border-gray-300 rounded-md mt-2"
        />
        <button
          onClick={handleAddTopic}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Topic
        </button>
      </div>

      {/* Add New Resource */}
      <div className="mb-6">
        <input
          type="text"
          value={newResource.title}
          onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
          placeholder="Resource title"
          className="w-full p-4 border border-gray-300 rounded-md mb-2"
        />
        <input
          type="text"
          value={newResource.description}
          onChange={(e) => setNewResource({ ...newResource, description: e.target.value })}
          placeholder="Resource description"
          className="w-full p-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleAddResource}
          className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Resource
        </button>
      </div>

      {/* Trending Topics */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🔥 Trending Topics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTopics.length === 0 ? (
            // Show skeleton while loading
            Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="bg-white p-4 border rounded-md shadow">
                  <Skeleton height="40px" />
                  <Skeleton height="20px" className="mt-2" />
                  <Skeleton height="15px" className="mt-4" />
                </div>
              ))
          ) : (
            filteredTopics.map((topic, index) => (
              <div key={index} className="bg-white p-4 border rounded-md shadow">
                <h3 className="font-bold text-lg">{topic.topic}</h3>
                <p>{topic.description}</p>
                <small className="text-gray-500">Posted by: {topic.username}</small>
                <button
                  onClick={() => handleRemoveTopic(index)}
                  className="mt-2 text-red-500 hover:bg-red-100 border border-red-500 hover:border-red-700 rounded-md py-1 px-4 transition-colors ml-1"
                >
                  Remove Topic
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Recommended Resources */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">📚 Recommended Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedResources.length === 0 ? (
            // Show skeleton while loading
            Array(4)
              .fill(null)
              .map((_, index) => (
                <div key={index} className="bg-white p-4 border rounded-md shadow">
                  <Skeleton height="40px" />
                  <Skeleton height="20px" className="mt-2" />
                  <Skeleton height="15px" className="mt-4" />
                </div>
              ))
          ) : (
            filteredResources.map((resource, index) => (
              <div key={index} className="bg-white p-4 border rounded-md shadow">
                <h3 className="font-bold text-lg">{resource.title}</h3>
                <p>{resource.description}</p>
                <small className="text-gray-500">Posted by: {resource.username}</small>
                <button
                  onClick={() => handleRemoveResource(index)}
                  className="mt-2 text-red-500 hover:bg-red-100 border border-red-500 hover:border-red-700 rounded-md py-1 px-4 transition-colors ml-1"
                >
                  Remove Resource
                </button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Update Button */}
      <button
        onClick={handleUpdate}
        disabled={isUpdating}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
      >
        {isUpdating ? "Updating..." : "Update Data"}
      </button>
    </div>
  );
};

export default Home;
