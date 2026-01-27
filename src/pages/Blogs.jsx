import React, { useMemo, useState } from "react";
import {
  Search,
  Grid as GridIcon,
  List as ListIcon,
  Calendar,
  User,
  Tag,
  ArrowLeft,
  ArrowRight,
  Clock,
  Eye,
  Heart,
  MessageCircle,
  Share2,
} from "lucide-react";
// Import replaced with inline data with real Unsplash images
import blogsData from "../lib/constants";
/**
 * BlogsPage.jsx - Catalystium Solutions
 * Enhanced version with individual post reading, better newsletter, coaching focus
 */

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export default function BlogsPage() {
  const [query, setQuery] = useState("");
  const [view, setView] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [page, setPage] = useState(1);
  const [currentPost, setCurrentPost] = useState(null); // For reading individual posts
  const perPage = 6;

  const allTags = useMemo(() => {
    const s = new Set();
    blogsData.blogs.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const categories = blogsData.categories.map((cat) => cat.name);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let res = blogsData.blogs.slice();
    if (selectedCategory) {
      res = res.filter(
        (p) =>
          p.category === selectedCategory ||
          p.tags.some((tag) =>
            tag.toLowerCase().includes(selectedCategory.toLowerCase()),
          ),
      );
    }
    if (q) {
      res = res.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.author.name.toLowerCase().includes(q),
      );
    }
    return res;
  }, [query, selectedCategory]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  function handleTagClick(tag) {
    setSelectedCategory(tag);
    setPage(1);
  }

  function clearFilters() {
    setQuery("");
    setSelectedCategory(null);
    setPage(1);
  }

  function openPost(post) {
    setCurrentPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function closePost() {
    setCurrentPost(null);
  }

  // If viewing individual post
  if (currentPost) {
    return (
      <div className="min-h-screen  bg-gradient-to-b from-[#f5f0eb] to-[#efe7df]">
        {/* Back Navigation */}

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-6 py-12 mt-50">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                {currentPost.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-[#6e6a64]">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  <span>{currentPost.readTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye size={14} />
                  <span>{currentPost.views} views</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#151412] leading-tight">
              {currentPost.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-black/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {currentPost.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[#151412]">
                    {currentPost.author.name}
                  </div>
                  <div className="text-sm text-[#6e6a64]">
                    {currentPost.author.role}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="p-2 hover:bg-[#f86f17]/10 rounded-full transition-colors"
                  aria-label="Like"
                >
                  <Heart size={20} className="text-[#f86f17]" />
                </button>
                <button
                  className="p-2 hover:bg-blue-700/10 rounded-full transition-colors"
                  aria-label="Share"
                >
                  <Share2 size={20} className="text-blue-700" />
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={currentPost.featuredImage}
              alt={currentPost.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {currentPost.content.map((block, idx) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={idx}
                    className="text-[#151412] leading-relaxed mb-6 text-lg"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "heading") {
                return (
                  <h2
                    key={idx}
                    className="text-3xl font-bold text-[#151412] mt-12 mb-6"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "subheading") {
                return (
                  <h3
                    key={idx}
                    className="text-2xl font-bold text-[#f86f17] mt-8 mb-4"
                  >
                    {block.text}
                  </h3>
                );
              }
              return null;
            })}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-black/10">
            <div className="text-sm text-[#6e6a64] mb-4 font-semibold">
              Related Topics
            </div>
            <div className="flex flex-wrap gap-2">
              {currentPost.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white text-[#151412] text-sm font-medium rounded-full border border-black/10 hover:border-[#f86f17] hover:text-[#f86f17] transition-all cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-12 border-t-2 border-black/10">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <MessageCircle size={24} className="text-[#f86f17]" />
              <span>
                Reflections & Responses ({currentPost.comments.length})
              </span>
            </h3>
            <div className="space-y-6">
              {currentPost.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white rounded-xl p-6 shadow-sm border border-black/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-700 to-[#f86f17] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {comment.author.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="font-bold text-[#151412]">
                            {comment.author}
                          </div>
                          <div className="text-sm text-[#6e6a64]">
                            {comment.role}
                          </div>
                        </div>
                        <div className="text-xs text-[#6e6a64]">
                          {formatDate(comment.date)}
                        </div>
                      </div>
                      <p className="text-[#151412] leading-relaxed mb-3">
                        {comment.comment}
                      </p>
                      <button className="text-sm text-[#6e6a64] hover:text-[#f86f17] flex items-center gap-1">
                        <Heart size={14} />
                        <span>{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Blog Button */}
          <div className="mt-12 text-center">
            <button
              onClick={closePost}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white font-bold rounded-full hover:shadow-xl transition-all hover:scale-105"
            >
              <ArrowLeft size={20} />
              <span>Back to All Insights</span>
            </button>
          </div>
        </article>
      </div>
    );
  }

  // Main blog listing view
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0eb] to-[#efe7df] text-[#151412]">
      {/* Page Header */}
      <div className="max-w-7xl mt-18 mx-auto px-6 md:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="text-sm text-[#6e6a64] mb-3 font-medium">
              Home / Coaching Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Coaching{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f86f17] to-[#ff8c5a]">
                Insights
              </span>
            </h1>
            <p className="mt-4 text-lg text-[#6e6a64] max-w-2xl">
              Expert perspectives on executive coaching, leadership development,
              and organizational transformation
            </p>
          </div>

          <div className="hidden md:flex space-x-3 items-center">
            <button
              onClick={() => setView("grid")}
              aria-label="grid view"
              className={`p-3 rounded-xl transition-all ${
                view === "grid"
                  ? "bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white shadow-lg scale-105"
                  : "bg-white hover:bg-[#f86f17]/10 shadow-sm"
              }`}
            >
              <GridIcon size={20} />
            </button>
            <button
              onClick={() => setView("list")}
              aria-label="list view"
              className={`p-3 rounded-xl transition-all ${
                view === "list"
                  ? "bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white shadow-lg scale-105"
                  : "bg-white hover:bg-[#f86f17]/10 shadow-sm"
              }`}
            >
              <ListIcon size={20} />
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="text-[#6e6a64]">Showing</div>
              <div className="font-bold text-[#151412] text-lg">
                {filtered.length}
              </div>
              <div className="text-[#6e6a64]">insights</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <span className="absolute inset-y-0 left-4 flex items-center text-[#6e6a64] pointer-events-none">
                <Search size={18} />
              </span>
              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search coaching insights..."
                className="pl-12 pr-6 py-3 rounded-full bg-white placeholder:text-[#6e6a64] text-sm shadow-md w-80 border-2 border-transparent focus:border-[#f86f17] focus:outline-none transition-all"
                aria-label="Search posts"
              />
            </div>
            {(query || selectedCategory) && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#6e6a64] hover:text-[#f86f17] font-semibold transition-colors"
                aria-label="Clear filters"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Main content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <main className="lg:col-span-2">
            {paginated.length === 0 ? (
              <div className="py-24 text-center">
                <div className="text-6xl mb-6">🔍</div>
                <div className="text-2xl font-bold mb-3 text-[#151412]">
                  No insights found
                </div>
                <div className="text-[#6e6a64]">
                  Try adjusting your search or filters to discover more coaching
                  wisdom.
                </div>
              </div>
            ) : (
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                    : "flex flex-col gap-6"
                }
              >
                {paginated.map((post) =>
                  view === "grid" ? (
                    <article
                      key={post.id}
                      onClick={() => openPost(post)}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 border border-black/5 cursor-pointer group"
                    >
                      <div className="aspect-[16/10] w-full overflow-hidden bg-[#efe7df]">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-[#151412] line-clamp-2 group-hover:text-[#f86f17] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-[#6e6a64] mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#6e6a64] mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#f86f17]" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-blue-700" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="pt-4 border-t border-black/5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f86f17] to-[#ff8c5a] flex items-center justify-center text-white font-bold text-sm">
                                {post.author.name.charAt(0)}
                              </div>
                              <span className="text-xs font-semibold text-[#151412]">
                                {post.author.name}
                              </span>
                            </div>
                            <span className="text-[#f86f17] font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                              Read More
                              <ArrowRight size={16} />
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ) : (
                    <article
                      key={post.id}
                      onClick={() => openPost(post)}
                      className="bg-white rounded-2xl p-6 flex gap-6 items-start shadow-md hover:shadow-xl transition-all cursor-pointer group border border-black/5"
                    >
                      <div className="w-48 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-[#efe7df]">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-[#151412] group-hover:text-[#f86f17] transition-colors">
                          {post.title}
                        </h3>
                        <div className="text-sm text-[#6e6a64] mb-3 flex items-center gap-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#f86f17]" />
                            <span>{formatDate(post.publishDate)}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-blue-700" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <User size={14} />
                            <span>{post.author.name}</span>
                          </div>
                        </div>
                        <p className="text-[#6e6a64] text-sm leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            )}

            {/* Pagination */}
            {paginated.length > 0 && (
              <div className="mt-10 flex items-center justify-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-3 rounded-xl bg-white shadow-md disabled:opacity-40 hover:bg-gradient-to-r hover:from-[#f86f17] hover:to-[#ff8c5a] hover:text-white transition-all disabled:hover:bg-white disabled:hover:text-[#151412]"
                  aria-label="Previous page"
                >
                  <ArrowLeft size={18} />
                </button>
                <div className="text-sm text-[#151412] font-medium">
                  Page{" "}
                  <span className="font-bold text-[#f86f17] text-lg">
                    {page}
                  </span>{" "}
                  of <span className="font-bold">{pageCount}</span>
                </div>
                <button
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  disabled={page === pageCount}
                  className="p-3 rounded-xl bg-white shadow-md disabled:opacity-40 hover:bg-gradient-to-r hover:from-[#f86f17] hover:to-[#ff8c5a] hover:text-white transition-all disabled:hover:bg-white disabled:hover:text-[#151412]"
                  aria-label="Next page"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
                <h4 className="text-sm text-[#6e6a64] mb-4 uppercase tracking-wider font-bold flex items-center gap-2">
                  <Tag size={16} className="text-[#f86f17]" />
                  Coaching Categories
                </h4>
                <ul className="space-y-2 text-sm">
                  {categories.map((c) => (
                    <li key={c}>
                      <button
                        onClick={() => {
                          setSelectedCategory(c);
                          setPage(1);
                        }}
                        className={`w-full text-left py-3 px-4 rounded-xl font-semibold transition-all ${
                          selectedCategory === c
                            ? "bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white shadow-md"
                            : "hover:bg-[#efe7df] text-[#151412]"
                        }`}
                      >
                        {c}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
                <h4 className="text-sm text-[#6e6a64] mb-4 uppercase tracking-wider font-bold flex items-center gap-2">
                  <Clock size={16} className="text-[#f86f17]" />
                  Recent Insights
                </h4>
                <ul className="space-y-4">
                  {blogsData.blogs.slice(0, 3).map((p) => (
                    <li
                      key={p.id}
                      onClick={() => openPost(p)}
                      className="flex items-start gap-3 cursor-pointer hover:bg-[#efe7df]/50 p-2 rounded-xl transition-all group"
                    >
                      <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[#efe7df]">
                        <img
                          src={p.featuredImage}
                          alt={p.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-bold text-[#151412] line-clamp-2 mb-1 group-hover:text-[#f86f17] transition-colors">
                          {p.title}
                        </div>
                        <div className="text-xs text-[#6e6a64] flex items-center gap-1">
                          <Calendar size={10} />
                          {formatDate(p.publishDate)}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
                <h4 className="text-sm text-[#6e6a64] mb-4 uppercase tracking-wider font-bold">
                  Popular Topics
                </h4>
                <div className="flex flex-wrap gap-2">
                  {allTags.slice(0, 10).map((t) => (
                    <button
                      key={t}
                      onClick={() => handleTagClick(t)}
                      className={`text-xs px-3 py-2 rounded-full font-semibold transition-all ${
                        selectedCategory === t
                          ? "bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white shadow-md"
                          : "bg-[#efe7df] text-[#151412] hover:bg-[#f86f17] hover:text-white"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Newsletter - IMPROVED */}
              <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#f86f17]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700/10 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] flex items-center justify-center mb-4 shadow-lg">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>

                  <h5 className="text-xl font-bold mb-2">Stay Connected</h5>
                  <p className="text-sm text-white/80 mb-6 leading-relaxed">
                    Get exclusive coaching insights, leadership strategies, and
                    transformation tips delivered to your inbox.
                  </p>

                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      aria-label="Newsletter email"
                      className="w-full rounded-xl px-4 py-3 text-[#151412] placeholder:text-[#6e6a64] focus:outline-none focus:ring-2 focus:ring-[#f86f17] bg-white/95"
                    />
                    <button className="w-full bg-gradient-to-r from-[#f86f17] to-[#ff8c5a] text-white px-6 py-3 rounded-xl font-bold uppercase text-sm tracking-wider hover:shadow-xl transition-all hover:scale-105">
                      Subscribe Now
                    </button>
                  </div>

                  <p className="text-xs text-white/60 mt-4 text-center">
                    Join 2,500+ leaders transforming their impact
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-[#151412] to-slate-900 py-20 mt-24 border-t-4 border-[#f86f17]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-[5rem] md:text-[8rem] lg:text-[12rem] font-extralight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f86f17] via-white to-blue-700 select-none mb-8 leading-none">
              COACHING
            </div>
            <p className="text-white/60 text-sm uppercase tracking-widest font-semibold">
              Transforming Leaders • Elevating Teams • Driving Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
