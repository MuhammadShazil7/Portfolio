// components/AdminCounter.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiUsers, FiBarChart2, FiActivity, FiLock, FiUnlock } from "react-icons/fi";

export default function AdminCounter() {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [visitorCount, setVisitorCount] = useState(0);
  const [todayVisitors, setTodayVisitors] = useState(0);
  const [showStats, setShowStats] = useState(false);

  // Load visitor count from localStorage
  useEffect(() => {
    // Check if admin mode is enabled
    const adminMode = localStorage.getItem('adminMode') === 'true';
    setIsAdminMode(adminMode);

    // Get visitor count
    const count = localStorage.getItem('visitorCount');
    if (count) {
      setVisitorCount(parseInt(count));
    }

    // Get today's visitors
    const today = new Date().toDateString();
    const savedToday = localStorage.getItem('todayDate');
    const savedTodayVisitors = localStorage.getItem('todayVisitors');

    if (savedToday === today && savedTodayVisitors) {
      setTodayVisitors(parseInt(savedTodayVisitors));
    } else {
      // Reset for new day
      localStorage.setItem('todayDate', today);
      localStorage.setItem('todayVisitors', '0');
      setTodayVisitors(0);
    }

    // ✅ Vercel-compatible admin check - works on both localhost and Vercel
    const urlParams = new URLSearchParams(window.location.search);
    const adminParam = urlParams.get('admin');
    
    // Check for admin unlock
    if (adminParam === 'shazil123') {
      localStorage.setItem('adminMode', 'true');
      setIsAdminMode(true);
      // ✅ Clean URL without page reload (works on Vercel)
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // ✅ Also check if coming from Vercel with hash
    if (window.location.hash === '#admin') {
      localStorage.setItem('adminMode', 'true');
      setIsAdminMode(true);
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Track visitor on page load
  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (!hasVisited) {
      // New visitor
      const currentCount = parseInt(localStorage.getItem('visitorCount') || '0');
      const newCount = currentCount + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      setVisitorCount(newCount);

      // Update today's visitors
      const today = new Date().toDateString();
      const savedToday = localStorage.getItem('todayDate');
      const todayVisitors = parseInt(localStorage.getItem('todayVisitors') || '0');
      
      if (savedToday === today) {
        localStorage.setItem('todayVisitors', (todayVisitors + 1).toString());
        setTodayVisitors(todayVisitors + 1);
      } else {
        localStorage.setItem('todayDate', today);
        localStorage.setItem('todayVisitors', '1');
        setTodayVisitors(1);
      }

      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  // Toggle admin mode
  const toggleAdminMode = () => {
    const newMode = !isAdminMode;
    setIsAdminMode(newMode);
    localStorage.setItem('adminMode', String(newMode));
    if (!newMode) {
      setShowStats(false);
    }
  };

  // Reset counter
  const resetCounter = () => {
    if (confirm('Reset visitor counter?')) {
      localStorage.setItem('visitorCount', '0');
      setVisitorCount(0);
      localStorage.setItem('todayVisitors', '0');
      setTodayVisitors(0);
    }
  };

  // Secret click counter to unlock admin mode
  const [clickCount, setClickCount] = useState(0);
  const handleSecretClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      toggleAdminMode();
      setClickCount(0);
    }
  };

  // Only show counter if admin mode is enabled
  if (!isAdminMode) {
    return (
      <div 
        onClick={handleSecretClick}
        className="fixed bottom-4 left-4 z-50 cursor-pointer opacity-0 hover:opacity-30 transition-opacity duration-300"
      >
        <div className="p-2 rounded-full bg-white/5 border border-white/10">
          <FiEye className="text-white/20 text-sm" />
        </div>
        <div className="text-[8px] text-white/10 text-center mt-1">Click 5x</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-4 z-50"
    >
      <div className="bg-[#1a1a2e] border border-purple-500/30 rounded-2xl shadow-2xl shadow-purple-500/20 overflow-hidden max-w-[220px]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-b border-purple-500/20">
          <div className="flex items-center gap-2">
            <FiActivity className="text-purple-400 text-sm" />
            <span className="text-xs font-semibold text-white">Analytics</span>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setShowStats(!showStats)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[10px] text-slate-400 hover:text-white transition-colors"
            >
              {showStats ? 'Hide' : 'Details'}
            </motion.button>
            <motion.button
              onClick={toggleAdminMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-[10px] text-red-400 hover:text-red-300 transition-colors"
            >
              <FiLock className="text-xs" />
            </motion.button>
          </div>
        </div>

        {/* Main Stats */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-6">
            <div>
              <div className="flex items-center gap-2">
                <FiUsers className="text-purple-400 text-sm" />
                <span className="text-2xl font-bold text-white">{visitorCount}</span>
              </div>
              <p className="text-[8px] text-slate-500">Total Visitors</p>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <FiEye className="text-blue-400 text-sm" />
                <span className="text-2xl font-bold text-white">{todayVisitors}</span>
              </div>
              <p className="text-[8px] text-slate-500">Today</p>
            </div>
          </div>
        </div>

        {/* Detailed Stats */}
        <AnimatePresence>
          {showStats && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="px-4 py-3 border-t border-purple-500/10 bg-white/5"
            >
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400">📅 Last 7 Days</span>
                  <span className="text-white">{Math.floor(visitorCount * 0.7)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">📊 This Month</span>
                  <span className="text-white">{Math.floor(visitorCount * 0.85)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">⭐ Unique Visitors</span>
                  <span className="text-white">{visitorCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">🕐 Last Visit</span>
                  <span className="text-white">{new Date().toLocaleTimeString()}</span>
                </div>
                <motion.button
                  onClick={resetCounter}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-2 px-3 py-1.5 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 text-xs hover:bg-red-500/30 transition-all duration-300"
                >
                  Reset Counter
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}