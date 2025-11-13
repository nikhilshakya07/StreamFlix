'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // For now, just alert - you can implement actual search later
      alert(`Searching for: ${searchQuery}`);
      setSearchQuery('');
      setSearchOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#141414] shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-red-600 font-bold text-2xl">STREAMFLIX</div>
        </Link>

        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <a href="/#trending" className="hover:text-gray-300 transition-colors">
              Trending
            </a>
          </li>
          <li>
            <a href="/#popular" className="hover:text-gray-300 transition-colors">
              Popular
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movies..."
                className="bg-black/50 border border-gray-600 rounded-l-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 w-48 md:w-64"
                autoFocus
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded-r-md transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="ml-2 p-2 hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
            </form>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:text-gray-300 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}