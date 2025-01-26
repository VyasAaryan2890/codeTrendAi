import React, { useState } from "react";

const Community = () => {
  const [communityMembers, setCommunityMembers] = useState([
    { id: 1, name: "Jane Doe", role: "Frontend Developer" },
    { id: 2, name: "John Smith", role: "Backend Developer" },
    { id: 3, name: "Alice Johnson", role: "Full Stack Developer" },
    { id: 4, name: "Bob Lee", role: "AI Specialist" },
  ]);

  const [forumPosts, setForumPosts] = useState([
    { id: 1, title: "How to improve React performance", author: "Jane Doe" },
    { id: 2, title: "AI in development - What's next?", author: "John Smith" },
    { id: 3, title: "GraphQL vs REST APIs", author: "Alice Johnson" },
  ]);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Join the Community</h1>
      <p className="text-gray-700 mb-6">
        Connect with developers, share ideas, and grow together as part of the CodeTrendAI community.
      </p>

      {/* Community Members Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">👥 Meet Our Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityMembers.map((member) => (
            <div key={member.id} className="bg-white p-4 border rounded-md shadow">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Forum Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">💬 Community Forum</h2>
        <div className="space-y-4">
          {forumPosts.map((post) => (
            <div key={post.id} className="bg-white p-4 border rounded-md shadow">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-gray-600">Posted by: {post.author}</p>
              <a href="#" className="text-blue-600 hover:underline">Join the Discussion</a>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">📅 Upcoming Events</h2>
        <div className="bg-white p-6 border rounded-md shadow">
          <h3 className="font-bold text-lg">CodeTrendAI Meetup - February 2025</h3>
          <p className="text-gray-600">Join us for an in-person meetup to discuss the latest trends in AI, React, and Web Development.</p>
          <a href="#" className="text-blue-600 hover:underline">RSVP Now</a>
        </div>
        <div className="bg-white p-6 border rounded-md shadow mt-6">
          <h3 className="font-bold text-lg">Hackathon - March 2025</h3>
          <p className="text-gray-600">Collaborate with other developers to create innovative projects in a 48-hour hackathon.</p>
          <a href="#" className="text-blue-600 hover:underline">Register Now</a>
        </div>
      </section>

      {/* Social Links Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🔗 Connect with Us</h2>
        <p className="text-gray-700 mb-6">Join our social media platforms for the latest updates, discussions, and collaborations:</p>
        <div className="flex space-x-6">
          <a href="#" className="text-blue-600 hover:underline">Twitter</a>
          <a href="#" className="text-blue-600 hover:underline">Discord</a>
          <a href="#" className="text-blue-600 hover:underline">GitHub</a>
        </div>
      </section>
    </div>
  );
};

export default Community;
