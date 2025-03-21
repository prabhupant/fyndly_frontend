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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-sky-50 to-teal-50">
      <main className="max-w-4xl mx-auto p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 font-sans">Content Generator</h1>
          <p className="text-gray-600">Generate engaging content with AI assistance</p>
        </div>
        
        <form onSubmit={handleSubmit} className="mb-12 bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
          <div className="space-y-6">
            <div>
              <label htmlFor="theme" className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <input
                type="text"
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
                placeholder="Enter your content theme"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="numPosts" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Posts
                </label>
                <input
                  type="number"
                  id="numPosts"
                  value={numPosts}
                  onChange={(e) => setNumPosts(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="How many posts?"
                  required
                  min="1"
                />
              </div>

              <div>
                <label htmlFor="wordLimit" className="block text-sm font-medium text-gray-700 mb-2">
                  Word Limit
                </label>
                <input
                  type="number"
                  id="wordLimit"
                  value={wordLimit}
                  onChange={(e) => setWordLimit(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 bg-white text-gray-900 placeholder-gray-500"
                  placeholder="Maximum words per post"
                  required
                  min="1"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-xl font-medium shadow-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </span>
              ) : 'Generate Posts'}
            </button>
          </div>
        </form>

        {posts.length > 0 && (
          <div className="space-y-8">
            {posts.map((post, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 transition-all duration-200 hover:shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Summary</h2>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Post {index + 1}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{post.post_summary}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Generated Content</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{post.post_on_user_style}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm border-t border-gray-100 pt-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className="text-gray-600">{post.author}</span>
                  </div>
                  <a
                    href={post.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 hover:text-indigo-600 transition-colors flex items-center space-x-1"
                  >
                    <span>View Source</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
