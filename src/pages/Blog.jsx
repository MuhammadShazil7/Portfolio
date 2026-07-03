// pages/Blog.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  FiCalendar, FiClock, FiTag, FiArrowRight, 
  FiSearch, FiX, FiHeart, FiMessageCircle,
  FiSend, FiMessageSquare
} from "react-icons/fi";

const blogPosts = [
  {
    id: 1,
    title: "My Journey as a Self-Taught Developer",
    date: "July 3, 2026",
    readTime: "6 min read",
    category: "Personal",
    tags: ["Career", "Learning", "JavaScript"],
    preview: "From knowing nothing in 2019 to building full-stack applications in 2026 — my journey as a developer...",
    content: `
      <p>I remember the day I wrote my first line of code. It was 2019, I was 16, sitting in my room, thinking: <em>"How hard can this be?"</em></p>
      <p><strong>Very hard. Turns out.</strong></p>
      <h3>The Beginning (2019)</h3>
      <p>I started with HTML and CSS from Top Land School where I was doing my Matric. I spent weeks trying to build my first webpage. It was ugly. It had neon green text on a black background. But it was <strong>mine</strong>.</p>
      <p>I remember thinking: "What even is CSS? Why won't this div center?" — still ask that question sometimes 😂</p>
      <h3>The JavaScript Phase (2020-2021)</h3>
      <p>Then came JavaScript. At first, it made no sense. Functions? Callbacks? The 'this' keyword? I wanted to give up. Multiple times.</p>
      <p>But I kept going because something clicked — <strong>coding is just problem-solving with a keyboard</strong>. And I love solving problems.</p>
      <p>During my Intermediate at KENT College (2019-2021), I started taking coding seriously. I built my first to-do list app. It was buggy. It crashed. The UI was terrible. But it was <strong>MINE</strong>.</p>
      <h3>The Breakthrough (2022)</h3>
      <p>2022 was the year everything changed. I joined Aptech Pakistan for their Software Engineering program. I started learning professional development. React. Node.js. MongoDB.</p>
      <p>I also got certified in <strong>Graphic Design</strong> and <strong>Digital Marketing</strong> from Korean Computer Academy — because I believe a developer should understand more than just code.</p>
      <h3>Freelancing & Beyond (2023-2026)</h3>
      <p>In 2023, I started freelancing. Built projects for real clients. Earned my first dollar. Felt like a king 👑</p>
      <p>Now in 2026, I'm pursuing my BS Computer Science from Aptech Pakistan. I've built full-stack applications, AI-powered platforms, and mobile apps. I've deployed my portfolio 50+ times on Vercel.</p>
      <h3>Lessons Learned</h3>
      <ul>
        <li><strong>Start small.</strong> Don't build a rocket before you can build a paper airplane</li>
        <li><strong>Break things.</strong> Breaking code is how you learn to fix it</li>
        <li><strong>Ask for help.</strong> Everyone Googles. Even senior devs</li>
        <li><strong>Build real projects.</strong> Tutorials teach you how, projects teach you why</li>
        <li><strong>Don't compare.</strong> Your journey is your own</li>
      </ul>
      <p>If you're just starting out: <strong>keep going</strong>. It gets easier. And even when it doesn't, it gets more fun.</p>
      <p>I'm Shazil — batting all-rounder, fast bowler, and full-stack developer. Still learning. Every single day.</p>
      <p style="color: #a855f7;">— Shazil 💻🏏</p>
    `,
    likes: 24,
    // ✅ HARDCODED MOCK COMMENTS
    comments: [
      { id: 101, name: "Ahmed Raza", text: "Bro this is so inspiring! I started learning React last month and your journey gives me hope 🙌", date: "July 3, 2026" },
      { id: 102, name: "Sara Khan", text: "The part about debugging a missing semicolon for 6 hours hit hard 😂 We've all been there!", date: "July 3, 2026" },
      { id: 103, name: "Usman Ali", text: "MashAllah! Your journey is really motivating. I'm also from Karachi and learning web dev. Any advice for beginners?", date: "July 2, 2026" },
      { id: 104, name: "Fatima Noor", text: "Love how you mentioned cricket and coding together! 🏏 Pakistan's all-rounder in both fields mashAllah", date: "July 2, 2026" },
      { id: 105, name: "Ali Hassan", text: "Bro I'm a self-taught developer too! Started with Python now learning MERN stack. Your portfolio is fire 🔥", date: "July 1, 2026" }
    ]
  },
  {
    id: 2,
    title: "How I Built My Portfolio (And What I Learned)",
    date: "July 2, 2026",
    readTime: "8 min read",
    category: "Technical",
    tags: ["React", "Vite", "Tailwind CSS", "Portfolio"],
    preview: "The journey of building my portfolio — mistakes, lessons, and 50+ Vercel deployments...",
    content: `
      <p>Building a portfolio is hard. Not because the code is complex, but because <strong>you're building for yourself</strong>. Every pixel matters. Every animation needs to be perfect.</p>
      <p>Here's how I built mine (and what I learned along the way).</p>
      <h3>Why I Built It</h3>
      <p>After 2+ years of coding, freelancing, and building projects for others, I finally built something for myself. A place to showcase my work, my skills, and my journey.</p>
      <h3>Tech Stack</h3>
      <ul>
        <li><strong>React</strong> — For the UI</li>
        <li><strong>Vite</strong> — For speed</li>
        <li><strong>Tailwind CSS</strong> — For styling</li>
        <li><strong>Framer Motion</strong> — For animations</li>
        <li><strong>Web3Forms</strong> — For the contact form</li>
        <li><strong>Vercel</strong> — For deployment</li>
      </ul>
      <h3>What Went Wrong</h3>
      <ul>
        <li><strong>Deployed 50+ times</strong> — each time taught me something new</li>
        <li><strong>Spent 2 hours</strong> fighting a CSS bug (turns out it was a missing space 🙃)</li>
        <li><strong>React Router</strong> broke on Vercel — needed a vercel.json file</li>
        <li><strong>Images</strong> wouldn't load — path issues (leading slash fixed it)</li>
      </ul>
      <h3>Lessons Learned</h3>
      <ul>
        <li><strong>Start with a plan.</strong> I didn't, and I rebuilt sections 3 times</li>
        <li><strong>Test on Vercel early.</strong> Don't wait until the end</li>
        <li><strong>Animation > Perfection.</strong> A good UX beats a perfect UI</li>
      </ul>
      <h3>Visit My Portfolio</h3>
      <p>Check it out: <a href="https://shazildev.vercel.app" target="_blank" style="color: #a855f7;">shazildev.vercel.app</a></p>
      <p style="color: #a855f7;">— Shazil 🚀</p>
    `,
    likes: 31,
    comments: [
      { id: 201, name: "Muhammad Bilal", text: "MashAllah! The design is super clean. Did you use any UI library?", date: "July 2, 2026" },
      { id: 202, name: "Ayesha Malik", text: "50+ deployments 😂 That's the realest thing I've read today!", date: "July 2, 2026" },
      { id: 203, name: "Hassan Raza", text: "The 3D tilt effect is sick! 🚀 How did you implement that?", date: "July 1, 2026" },
      { id: 204, name: "Zainab Tariq", text: "Loved the animations! Framer Motion is magic ✨", date: "July 1, 2026" },
      { id: 205, name: "Rayan Ahmed", text: "The dark theme with purple gradient is 👌", date: "June 30, 2026" },
      { id: 206, name: "Hira Khan", text: "This gave me so many ideas! How long did it take you?", date: "June 30, 2026" },
      { id: 207, name: "Salman Chaudhry", text: "The scroll transitions are so smooth 🔥", date: "June 29, 2026" },
      { id: 208, name: "Fatima Ali", text: "MashAllah! The 3D card is my favorite part. Keep it up! 💪", date: "June 29, 2026" }
    ]
  },
  {
    id: 3,
    title: "What I Learned in 2 Years of Coding",
    date: "July 1, 2026",
    readTime: "7 min read",
    category: "Personal",
    tags: ["Learning", "Career", "JavaScript"],
    preview: "2 years, 10+ projects, and countless bugs. Here's what I wish I knew earlier...",
    content: `
      <p>I started coding in 2019. I didn't know what a variable was. I didn't know what a function was. I definitely didn't know what a closure was.</p>
      <p>Now, 2+ years later, here's what I learned.</p>
      <h3>1. Learning to Code is 10% Coding, 90% Debugging</h3>
      <p>Most of your time will be spent fixing things that are broken. That's normal. I once spent 6 hours debugging a missing semicolon. <strong>6 hours.</strong></p>
      <h3>2. You Don't Need to Know Everything</h3>
      <p>I still Google 'how to center a div.' I still forget syntax. That's okay.</p>
      <h3>3. Build Real Projects</h3>
      <p>Tutorials are great. But <strong>you really learn when you're stuck</strong> with no tutorial to help you.</p>
      <h3>4. Side Projects Matter</h3>
      <p>Your side projects are what get you hired. I built 10+ projects while learning.</p>
      <h3>5. Community is Everything</h3>
      <p>I learned more from Reddit, Twitter, and YouTube than from any course.</p>
      <h3>6. Don't Compare Yourself</h3>
      <p>Your journey is your own. Focus on yourself.</p>
      <h3>7. Enjoy the Process</h3>
      <p>Code is frustrating. It's also beautiful. That's magic.</p>
      <h3>8. Discipline is Everything</h3>
      <p>I hit the gym 6 days a week and code 7 days. Discipline makes the difference.</p>
      <p style="color: #a855f7;">— Shazil 💻🏋️</p>
    `,
    likes: 18,
    comments: [
      { id: 301, name: "Omar Farooq", text: "Point #1 is so true! I spend more time debugging than coding 😂", date: "July 1, 2026" },
      { id: 302, name: "Nadia Hassan", text: "The gym analogy 🔥 Discipline in coding = discipline in fitness.", date: "July 1, 2026" },
      { id: 303, name: "Imran Khan", text: "MashAllah! The 'don't compare' point is something I needed to hear 🙏", date: "June 30, 2026" }
    ]
  },
  {
    id: 4,
    title: "Why I Chose React Over Angular",
    date: "June 28, 2026",
    readTime: "5 min read",
    category: "Technical",
    tags: ["React", "Angular", "JavaScript", "Frontend"],
    preview: "After using both, here's why I personally prefer React...",
    content: `
      <p>The React vs Angular debate is endless. Both are great. But here's why I chose React.</p>
      <h3>My Journey with Both</h3>
      <p>I started with React because the learning curve felt gentler. JSX felt natural. The component-based architecture just made sense.</p>
      <p>Then I learned Angular (2023). It's powerful. It's enterprise-ready. But it felt like overkill for my style.</p>
      <h3>Why I Prefer React</h3>
      <ul>
        <li><strong>Freedom</strong> — Structure things your way</li>
        <li><strong>Learning Curve</strong> — JSX is easier to pick up</li>
        <li><strong>Community</strong> — Huge ecosystem</li>
        <li><strong>Reusability</strong> — Components are simple</li>
        <li><strong>Speed</strong> — React + Vite is incredibly fast</li>
      </ul>
      <h3>My Verdict</h3>
      <p>I use React for my projects because I love the freedom. But I respect Angular.</p>
      <p><strong>Bottom line:</strong> Both are great. Both will frustrate you at 3am 😂</p>
      <p style="color: #a855f7;">— Shazil ⚛️</p>
    `,
    likes: 27,
    comments: [
      { id: 401, name: "Shahid Ali", text: "React's freedom is unbeatable. Angular feels too restrictive.", date: "June 28, 2026" },
      { id: 402, name: "Huma Qureshi", text: "Your post made me want to try React 😅", date: "June 28, 2026" },
      { id: 403, name: "Faizan Ahmed", text: "The React vs Angular debate will never end 😂", date: "June 28, 2026" },
      { id: 404, name: "Sana Sheikh", text: "Both are great but React is just more fun.", date: "June 27, 2026" },
      { id: 405, name: "Taha Mahmood", text: "Try Svelte too! It's the next big thing 👀", date: "June 27, 2026" }
    ]
  },
  {
    id: 5,
    title: "The Best Way to Learn JavaScript in 2026",
    date: "June 25, 2026",
    readTime: "6 min read",
    category: "Tutorial",
    tags: ["JavaScript", "Learning", "Resources"],
    preview: "A complete guide to learning JavaScript in 2026 — resources, projects, and mindset...",
    content: `
      <p>JavaScript is everywhere. And learning it can feel overwhelming. Here's my personal guide.</p>
      <h3>Start with the Basics</h3>
      <p>Variables, functions, loops, arrays, objects. <strong>Master these</strong>.</p>
      <p>Then move to ES6 features: arrow functions, destructuring, spread operator, modules.</p>
      <h3>Resources I Used</h3>
      <ul>
        <li><strong>FreeCodeCamp</strong> — The best free resource</li>
        <li><strong>YouTube</strong> — Traversy Media, Web Dev Simplified</li>
        <li><strong>MDN Docs</strong> — Your best friend</li>
        <li><strong>Stack Overflow</strong> — We all use it</li>
      </ul>
      <h3>Projects to Build</h3>
      <ul>
        <li>To-Do List — Classic first project</li>
        <li>Weather App — Learn APIs</li>
        <li>Calculator — Master DOM manipulation</li>
        <li>Expense Tracker — CRUD operations</li>
        <li>Portfolio — Showcase everything</li>
      </ul>
      <h3>My Learning Journey</h3>
      <p>I started in 2019 with HTML/CSS. It took me 2+ years to feel comfortable. The key? <strong>Consistency</strong>.</p>
      <p style="color: #a855f7;">— Shazil 📚</p>
    `,
    likes: 45,
    comments: [
      { id: 501, name: "Danish Khan", text: "Bro this is gold! Your guide is exactly what I needed 🙏", date: "June 25, 2026" },
      { id: 502, name: "Mehak Raza", text: "FreeCodeCamp and YouTube got me through my first year too!", date: "June 25, 2026" },
      { id: 503, name: "Zeeshan Ali", text: "The project list is solid! Thanks for sharing!", date: "June 24, 2026" },
      { id: 504, name: "Noor Fatima", text: "Stack Overflow is our best friend and worst enemy 😂", date: "June 24, 2026" }
    ]
  },
  {
    id: 6,
    title: "My First Freelance Client (And Why It Failed)",
    date: "June 22, 2026",
    readTime: "5 min read",
    category: "Personal",
    tags: ["Freelance", "Career", "Lessons"],
    preview: "A story about my first client, how it went wrong, and what I learned from it...",
    content: `
      <p>My first freelance client was a disaster. And <strong>I'm grateful for it.</strong></p>
      <h3>The Story</h3>
      <p>It was 2022. I was new to freelancing. I got a client who wanted a website. I quoted a price so low it was embarrassing.</p>
      <p>I overpromised. I said I could build it in a week. It took 3 weeks. I underdelivered.</p>
      <h3>What Went Wrong</h3>
      <ul>
        <li>I undercharged — Way too cheap</li>
        <li>I overpromised — Unrealistic expectations</li>
        <li>I didn't communicate — Kept things to myself</li>
        <li>I didn't have a contract — No boundaries</li>
      </ul>
      <h3>What I Learned</h3>
      <ul>
        <li>Charge what you're worth</li>
        <li>Be realistic — Underpromise, overdeliver</li>
        <li>Communicate — Keep clients updated</li>
        <li>Use a contract — Protects both parties</li>
      </ul>
      <h3>My Advice</h3>
      <p>Failure is not the end. It's <strong>the beginning of learning</strong>.</p>
      <p style="color: #a855f7;">— Shazil 💼</p>
    `,
    likes: 56,
    comments: [
      { id: 601, name: "Rahul Kumar", text: "Bro this story is all of us 😂 My first client was a nightmare too!", date: "June 22, 2026" },
      { id: 602, name: "Sadia Mirza", text: "The contract part is so important! Great advice!", date: "June 22, 2026" },
      { id: 603, name: "Faisal Shah", text: "Undercharging and overpromising — classic beginner mistake 😂", date: "June 22, 2026" },
      { id: 604, name: "Hina Zaidi", text: "MashAllah! Love the honesty. Keep going! 💪", date: "June 21, 2026" },
      { id: 605, name: "Usman Butt", text: "Every freelancer has a 'first client' story. So relatable!", date: "June 21, 2026" },
      { id: 606, name: "Iqra Ali", text: "Respect for not giving up after failure 🙌", date: "June 21, 2026" }
    ]
  }
];

// Categories for filter
const categories = ["All", "Personal", "Technical", "Tutorial"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState({});
  const [newComment, setNewComment] = useState("");
  const [commenterName, setCommenterName] = useState("");
  const [userComments, setUserComments] = useState({});

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle like
  const handleLike = (postId) => {
    setLikedPosts(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  // Handle comment submit
  const handleCommentSubmit = (postId) => {
    if (!newComment.trim() || !commenterName.trim()) return;

    const comment = {
      id: Date.now(),
      name: commenterName,
      text: newComment,
      date: new Date().toLocaleDateString()
    };

    setUserComments(prev => ({
      ...prev,
      [postId]: [...(prev[postId] || []), comment]
    }));

    setNewComment("");
    setCommenterName("");
  };

  // Get all comments (mock + user)
  const getAllComments = (post) => {
    const mockComments = post.comments || [];
    const userAdded = userComments[post.id] || [];
    return [...mockComments, ...userAdded];
  };

  return (
    <section className="min-h-screen bg-[#050816] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
            Thoughts & Ideas
          </p>
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-slate-400 mt-4 text-lg">
            Writing about code, learning, cricket, and everything in between 🏏💻
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-10"
        >
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-purple-400 outline-none transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition"
              >
                <FiX />
              </button>
            )}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                onClick={() => setSelectedPost(post)}
                className="group p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-purple-400/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="text-purple-400" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-purple-400" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="text-purple-400">{post.category}</span>
                </div>

                <h2 className="text-xl font-bold text-white group-hover:text-purple-400 transition">
                  {post.title}
                </h2>

                <p className="text-slate-400 mt-2 text-sm">
                  {post.preview}
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-slate-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleLike(post.id); }}
                      className={`flex items-center gap-1 transition ${likedPosts[post.id] ? 'text-purple-400' : 'hover:text-purple-400'}`}
                    >
                      <FiHeart className={likedPosts[post.id] ? 'fill-purple-400' : ''} />
                      {post.likes + (likedPosts[post.id] ? 1 : 0)}
                    </button>
                    <span className="flex items-center gap-1">
                      <FiMessageCircle />
                      {getAllComments(post).length}
                    </span>
                  </div>
                  <span className="text-purple-400 group-hover:translate-x-1 transition">
                    <FiArrowRight />
                  </span>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-slate-400">No posts found. Try adjusting your search.</p>
            </div>
          )}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 rounded-2xl border border-white/10 bg-white/5 text-center"
        >
          <p className="text-slate-400 text-sm">
            🚀 More posts coming soon. Follow me to stay updated!
          </p>
        </motion.div>

        {/* Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-3xl bg-[#1a1a2e] border border-white/10"
            >
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
              >
                <FiX className="text-2xl" />
              </button>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-purple-400" />
                  {selectedPost.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <FiClock className="text-purple-400" />
                  {selectedPost.readTime}
                </span>
                <span>•</span>
                <span className="text-purple-400">{selectedPost.category}</span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-4">
                {selectedPost.title}
              </h2>

              <div 
                className="prose prose-invert max-w-none text-slate-300 leading-relaxed [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-1 [&>p]:mb-4 [&>p]:leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              <div className="flex flex-wrap gap-2 mt-6">
                {selectedPost.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/10">
                <button 
                  onClick={() => handleLike(selectedPost.id)}
                  className={`flex items-center gap-2 transition ${likedPosts[selectedPost.id] ? 'text-purple-400' : 'text-slate-500 hover:text-purple-400'}`}
                >
                  <FiHeart className={likedPosts[selectedPost.id] ? 'fill-purple-400' : ''} />
                  {selectedPost.likes + (likedPosts[selectedPost.id] ? 1 : 0)} likes
                </button>
                <span className="text-slate-500 flex items-center gap-2">
                  <FiMessageCircle />
                  {getAllComments(selectedPost).length} comments
                </span>
              </div>

              {/* ✅ COMMENTS SECTION */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <FiMessageSquare className="text-purple-400" />
                  Comments ({getAllComments(selectedPost).length})
                </h4>

                {/* Comment List */}
                <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                  {getAllComments(selectedPost).map((comment) => (
                    <div key={comment.id} className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-purple-400">{comment.name}</span>
                        <span className="text-[10px] text-slate-500">{comment.date}</span>
                      </div>
                      <p className="text-sm text-slate-300 mt-1">{comment.text}</p>
                    </div>
                  ))}
                </div>

                {/* Comment Form */}
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name..."
                    value={commenterName}
                    onChange={(e) => setCommenterName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-purple-400 outline-none transition text-sm"
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Write a comment..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && commenterName && newComment) {
                          handleCommentSubmit(selectedPost.id);
                        }
                      }}
                      className="flex-1 p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-purple-400 outline-none transition text-sm"
                    />
                    <button
                      onClick={() => handleCommentSubmit(selectedPost.id)}
                      disabled={!commenterName || !newComment}
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed transition hover:scale-105"
                    >
                      <FiSend />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}