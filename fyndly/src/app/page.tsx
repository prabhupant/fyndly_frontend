'use client';

import { useState } from 'react';

interface Post {
  post_summary: string;
  author: string;
  source: string;
  post_on_user_style: string;
}

export default function Home() {
  const [theme, setTheme] = useState('');
  const [numPosts, setNumPosts] = useState('');
  const [wordLimit, setWordLimit] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/generate-posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme,
          numPosts: parseInt(numPosts),
          wordLimit: parseInt(wordLimit),
        }),
      });

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Content Generator</h1>
      
      <form onSubmit={handleSubmit} className="mb-8 space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-1">
            Theme
          </label>
          <input
            type="text"
            id="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter theme"
            required
          />
        </div>

        <div>
          <label htmlFor="numPosts" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Posts
          </label>
          <input
            type="number"
            id="numPosts"
            value={numPosts}
            onChange={(e) => setNumPosts(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter number of posts"
            required
            min="1"
          />
        </div>

        <div>
          <label htmlFor="wordLimit" className="block text-sm font-medium text-gray-700 mb-1">
            Word Limit
          </label>
          <input
            type="number"
            id="wordLimit"
            value={wordLimit}
            onChange={(e) => setWordLimit(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter word limit"
            required
            min="1"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-300"
        >
          {isLoading ? 'Generating...' : 'Generate Posts'}
        </button>
      </form>

      {posts.length > 0 && (
        <div className="space-y-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Summary</h2>
                <p className="text-gray-700">{post.post_summary}</p>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2">Generated Post</h3>
                <p className="text-gray-700 whitespace-pre-wrap">{post.post_on_user_style}</p>
              </div>
              
              <div className="flex justify-between text-sm text-gray-500">
                <span>Author: {post.author}</span>
                <a
                  href={post.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Source Link
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
