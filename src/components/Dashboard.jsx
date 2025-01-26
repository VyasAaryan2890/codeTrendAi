import React, { useState } from "react";

const Dashboard = () => {
  // State for tracking goals and activities
  const [goals, setGoals] = useState([
    { id: 1, title: "Learn React.js", progress: 40, completed: false },
    { id: 2, title: "Master Tailwind CSS", progress: 70, completed: false },
    { id: 3, title: "Build Full-stack App", progress: 10, completed: false },
  ]);
  const [recentActivities, setRecentActivities] = useState([
    "Completed React.js Basics Course",
    "Read Tailwind CSS documentation",
    "Set up Vite project for full-stack app",
  ]);
  const [newGoal, setNewGoal] = useState("");
  const [newActivity, setNewActivity] = useState("");

  // Trending Topics and Recommended Resources (Home content)
  const [trendingTopics, setTrendingTopics] = useState([
    { id: 1, topic: "React.js Trends", description: "Latest updates in React.js", likes: 10, dislikes: 2 },
    { id: 2, topic: "AI in Development", description: "Exploring AI’s role in development", likes: 5, dislikes: 1 },
    { id: 3, topic: "Serverless Architecture", description: "How to build serverless applications", likes: 15, dislikes: 3 },
  ]);

  const [recommendedResources, setRecommendedResources] = useState([
    { id: 1, title: "React for Beginners", description: "Learn the basics of React", likes: 8, dislikes: 1 },
    { id: 2, title: "Mastering Tailwind CSS", description: "A deep dive into Tailwind CSS", likes: 12, dislikes: 2 },
    { id: 3, title: "Node.js Tutorial", description: "Learn how to build APIs with Node.js", likes: 6, dislikes: 1 },
  ]);

  // Add new goal handler
  const handleAddGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { id: goals.length + 1, title: newGoal, progress: 0, completed: false }]);
      setNewGoal("");
    }
  };

  // Add new activity handler
  const handleAddActivity = () => {
    if (newActivity.trim()) {
      setRecentActivities([newActivity, ...recentActivities]);
      setNewActivity("");
    }
  };

  // Update goal progress
  const updateGoalProgress = (id, progress) => {
    setGoals(goals.map(goal => goal.id === id ? { ...goal, progress } : goal));
  };

  // Mark goal as completed
  const markGoalAsCompleted = (id) => {
    setGoals(goals.map(goal => goal.id === id ? { ...goal, completed: true } : goal));
  };

  // Delete activity or goal
  const handleDeleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const handleDeleteActivity = (index) => {
    setRecentActivities(recentActivities.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 transition-transform transform hover:scale-105">
        Your Learning Dashboard
      </h1>
      <p className="text-gray-700 mb-6 text-center">
        Track your learning progress, manage goals, and achieve mastery in coding!
      </p>

      {/* Goals Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">🎯 Your Learning Goals</h2>
        <div className="space-y-6">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`bg-white p-4 border rounded-md shadow-lg transform transition-all hover:scale-105 ${goal.completed ? 'bg-gray-200' : ''}`}
            >
              <h3 className="font-bold">{goal.title}</h3>
              {!goal.completed && (
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${goal.progress}%` }}
                  ></div>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-2">Progress: {goal.progress}%</p>
              <button
                onClick={() => markGoalAsCompleted(goal.id)}
                className="mt-2 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Mark as Completed
              </button>
              <button
                onClick={() => handleDeleteGoal(goal.id)}
                className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                Delete Goal
              </button>
              {!goal.completed && (
                <input
                  type="number"
                  value={goal.progress}
                  onChange={(e) => updateGoalProgress(goal.id, parseInt(e.target.value))}
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md"
                  min="0"
                  max="100"
                  placeholder="Update progress"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-6">
          <input
            type="text"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
            placeholder="Add a new learning goal"
            className="w-full p-4 border border-gray-300 rounded-md transition-transform transform hover:scale-105"
          />
          <button
            onClick={handleAddGoal}
            className="mt-2 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Add Goal
          </button>
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">📝 Recent Activity</h2>
        <div className="space-y-6">
          {recentActivities.map((activity, index) => (
            <div key={index} className="bg-white p-4 border rounded-md shadow-lg transform transition-all hover:scale-105">
              <p>{activity}</p>
              <button
                onClick={() => handleDeleteActivity(index)}
                className="mt-2 w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
              >
                Delete Activity
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <input
            type="text"
            value={newActivity}
            onChange={(e) => setNewActivity(e.target.value)}
            placeholder="Add a new activity"
            className="w-full p-4 border border-gray-300 rounded-md transition-transform transform hover:scale-105"
          />
          <button
            onClick={handleAddActivity}
            className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Add Activity
          </button>
        </div>
      </section>

      {/* Trending Topics Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">🚀 Trending Topics</h2>
        <div className="space-y-6">
          {trendingTopics.map((topic) => (
            <div key={topic.id} className="bg-white p-4 border rounded-md shadow-lg transform transition-all hover:scale-105">
              <h3 className="font-bold">{topic.topic}</h3>
              <p>{topic.description}</p>
              <div className="mt-2 flex space-x-4">
                <span className="text-blue-600">👍 {topic.likes}</span>
                <span className="text-red-600">👎 {topic.dislikes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended Resources Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-500">📚 Recommended Resources</h2>
        <div className="space-y-6">
          {recommendedResources.map((resource) => (
            <div key={resource.id} className="bg-white p-4 border rounded-md shadow-lg transform transition-all hover:scale-105">
              <h3 className="font-bold">{resource.title}</h3>
              <p>{resource.description}</p>
              <div className="mt-2 flex space-x-4">
                <span className="text-blue-600">👍 {resource.likes}</span>
                <span className="text-red-600">👎 {resource.dislikes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
  