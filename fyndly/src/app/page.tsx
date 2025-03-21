'use client';

import { useState, useEffect } from 'react';

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
  const [writingStyle, setWritingStyle] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('darkMode');
    setDarkMode(savedTheme === 'true');
    
    // Apply the theme to the document
    document.documentElement.classList.toggle('dark', savedTheme === 'true');
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/web_agent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          theme,
          num_of_posts: parseInt(numPosts),
          word_limit: parseInt(wordLimit),
          writing_style: writingStyle,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate posts. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-rose-50 via-sky-50 to-teal-50'}`}>
      <main className="max-w-4xl mx-auto p-8">
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-200"
          >
            {darkMode ? (
              <>
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <span className="text-white">Light Mode</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span className="text-gray-700">Dark Mode</span>
              </>
            )}
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-2 font-sans ${darkMode ? 'text-white' : 'text-gray-800'}`}>Content Generator</h1>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Generate engaging content with AI assistance</p>
        </div>
        
        <form onSubmit={handleSubmit} className={`mb-12 p-8 rounded-2xl shadow-lg border transition-colors duration-200 ${darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-white/50'} backdrop-blur-sm`}>
          <div className="space-y-6">
            <div>
              <label htmlFor="theme" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Theme
              </label>
              <input
                type="text"
                id="theme"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter your content theme"
                required
              />
            </div>

            <div>
              <label htmlFor="writingStyle" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                Writing Style Example
              </label>
              <textarea
                id="writingStyle"
                value={writingStyle}
                onChange={(e) => setWritingStyle(e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 min-h-[120px] ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                placeholder="Enter a paragraph that demonstrates your preferred writing style..."
                required
              />
              <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                This will help generate content that matches your writing style.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="numPosts" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Number of Posts
                </label>
                <input
                  type="number"
                  id="numPosts"
                  value={numPosts}
                  onChange={(e) => setNumPosts(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="How many posts?"
                  required
                  min="1"
                />
              </div>

              <div>
                <label htmlFor="wordLimit" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  Word Limit
                </label>
                <input
                  type="number"
                  id="wordLimit"
                  value={wordLimit}
                  onChange={(e) => setWordLimit(e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 ${
                    darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                  }`}
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
              <div key={index} className={`p-8 rounded-2xl shadow-lg border transition-colors duration-200 ${
                darkMode ? 'bg-gray-800/70 border-gray-700' : 'bg-white/70 border-white/50'
              } backdrop-blur-sm hover:shadow-xl`}>
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Summary</h2>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-500'
                    }`}>Post {index + 1}</span>
                  </div>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-700'} style={{ lineHeight: '1.6' }}>{post.post_summary}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Generated Content</h3>
                  <div className={`rounded-xl p-6 ${darkMode ? 'bg-gray-700/50' : 'bg-gray-50'}`}>
                    <p className={`whitespace-pre-wrap ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ lineHeight: '1.6' }}>{post.post_on_user_style}</p>
                  </div>
                </div>
                
                <div className={`flex items-center justify-between text-sm border-t pt-4 ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                  <div className="flex items-center space-x-2">
                    <svg className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{post.author}</span>
                  </div>
                  <a
                    href={post.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center space-x-1"
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
