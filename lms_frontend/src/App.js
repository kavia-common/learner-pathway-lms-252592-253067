import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './index.css'; // includes Tailwind + theme.css
import './App.css';

// PUBLIC_INTERFACE
function App() {
  /** Toggle a simple data-theme attribute to allow future dark mode styling via CSS vars. */
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500/10 to-gray-50">
      {/* Top navigation / app header */}
      <header className="h-[72px] flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="App logo" className="h-7 w-7" />
            <span className="text-sm font-medium text-gray-700">Ocean LMS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200" href="#home">Home</a>
            <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200" href="#about">About</a>
            <a className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200" href="#services">Services</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="hidden sm:inline-flex h-10 px-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
            <button
              className="h-10 px-4 rounded-[14px] border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 shadow-subtle transition duration-200"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative min-h-[560px] text-white">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(60% 80% at 10% 35%, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.0) 55%)' }}></div>

        <div className="relative w-full max-w-[1200px] mx-auto px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-6 lg:gap-6 pt-20 md:pt-20 lg:pt-20">
            <div className="col-span-12 md:col-span-5">
              <h1 className="text-white font-bold tracking-tight" style={{ fontSize: '56px', lineHeight: '64px' }}>
                Eco products
              </h1>
              <p className="mt-4 max-w-xl text-white/80" style={{ fontSize: '18px', lineHeight: '28px' }}>
                Save your time and increase productivity as valuable with more details shown in design.
              </p>
              <div className="mt-6">
                <button className="btn btn-outline-light">
                  About us
                </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 flex items-center justify-end">
              {/* Decorative art placeholder */}
              <div
                role="presentation"
                aria-hidden="true"
                className="w-[640px] h-[360px] rounded-xl"
                style={{
                  background: 'radial-gradient(120% 140% at 60% 40%, rgba(34,211,238,0.35) 0%, rgba(124,58,237,0.45) 40%, rgba(236,72,153,0.50) 75%)',
                  filter: 'blur(2px)',
                  boxShadow: '0 16px 40px rgba(2,6,23,0.24)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content placeholder */}
      <main className="w-full max-w-[1200px] mx-auto px-8 py-12">
        <div className="bg-white rounded-xl shadow-subtle p-6">
          <h2 className="text-xl font-semibold text-gray-900">Welcome</h2>
          <p className="mt-2 text-gray-600">
            Edit <code className="font-mono">src/App.js</code> and save to reload. Current theme:
            <strong> {theme}</strong>.
          </p>
          <a
            className="inline-block mt-4 text-primary hover:text-primaryPressed transition-colors duration-200"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
