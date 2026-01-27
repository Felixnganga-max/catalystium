import React, { useState, useEffect } from "react";
import {
  Search,
  Calendar,
  Clock,
  Tag,
  User,
  ArrowRight,
  Heart,
  Eye,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  Share2,
  Bookmark,
  TrendingUp,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";
import blogsData from "../lib/constants";

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [email, setEmail] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [likedBlogs, setLikedBlogs] = useState([]);
  const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");
  const [commentEmail, setCommentEmail] = useState("");
  const [sortBy, setSortBy] = useState("recent");

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedLikes = localStorage.getItem("likedBlogs");
    const savedBookmarks = localStorage.getItem("bookmarkedBlogs");
    if (savedLikes) setLikedBlogs(JSON.parse(savedLikes));
    if (savedBookmarks) setBookmarkedBlogs(JSON.parse(savedBookmarks));
  }, []);

  // Filter blogs based on category, search, and tags
  const filteredBlogs = blogsData.blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "all" || blog.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => blog.tags.includes(tag));

    return matchesCategory && matchesSearch && matchesTags;
  });

  // Sort blogs
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    switch (sortBy) {
      case "recent":
        return new Date(b.publishDate) - new Date(a.publishDate);
      case "popular":
        return b.views - a.views;
      case "mostLiked":
        return b.likes - a.likes;
      default:
        return 0;
    }
  });

  const handleLike = (blogId) => {
    const newLikes = likedBlogs.includes(blogId)
      ? likedBlogs.filter((id) => id !== blogId)
      : [...likedBlogs, blogId];
    setLikedBlogs(newLikes);
    localStorage.setItem("likedBlogs", JSON.stringify(newLikes));
  };

  const handleBookmark = (blogId) => {
    const newBookmarks = bookmarkedBlogs.includes(blogId)
      ? bookmarkedBlogs.filter((id) => id !== blogId)
      : [...bookmarkedBlogs, blogId];
    setBookmarkedBlogs(newBookmarks);
    localStorage.setItem("bookmarkedBlogs", JSON.stringify(newBookmarks));
  };

  const handleSubscribe = () => {
    console.log("Subscribed:", email);
    setEmail("");
  };

  const handleCommentSubmit = () => {
    console.log("Comment submitted:", {
      name: commentName,
      email: commentEmail,
      comment: commentText,
    });
    setCommentText("");
    setCommentName("");
    setCommentEmail("");
    setShowCommentForm(false);
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const shareArticle = (platform, blog) => {
    const url = `https://catalystiumsolutions.com/blog/${blog.slug}`;
    const text = blog.title;

    switch (platform) {
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(
            text,
          )}&url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url,
          )}`,
          "_blank",
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url,
          )}`,
          "_blank",
        );
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        break;
      default:
        break;
    }
  };

  // Blog Card Component
  const BlogCard = ({ blog }) => {
    const isLiked = likedBlogs.includes(blog.id);
    const isBookmarked = bookmarkedBlogs.includes(blog.id);

    return (
      <article className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-black/5 hover:border-[#f86f17]/30">
        {/* Featured Image */}
        <div className="relative h-64 overflow-hidden bg-[#efe7df]">
          <div className="absolute inset-0 bg-[#f86f17] opacity-10" />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-4 py-2 bg-[#f86f17] text-white text-xs font-bold uppercase tracking-wider rounded-full">
              {blog.category}
            </span>
          </div>
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleLike(blog.id);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isLiked
                  ? "bg-[#f86f17] text-white"
                  : "bg-white/80 text-[#151412] hover:bg-[#f86f17] hover:text-white"
              }`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleBookmark(blog.id);
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                isBookmarked
                  ? "bg-blue-700 text-white"
                  : "bg-white/80 text-[#151412] hover:bg-blue-700 hover:text-white"
              }`}
            >
              <Bookmark
                className={`w-5 h-5 ${isBookmarked ? "fill-current" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-[#6e6a64] mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#f86f17]" />
              <span>{new Date(blog.publishDate).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>{blog.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold mb-4 text-[#151412] group-hover:text-[#f86f17] transition-colors line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#6e6a64] mb-6 line-clamp-3 leading-relaxed">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#efe7df] text-[#151412] text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-black/5">
            <div className="flex items-center gap-4 text-sm text-[#6e6a64]">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{blog.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4" />
                <span>{blog.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span>{blog.comments.length}</span>
              </div>
            </div>

            <button
              onClick={() => setSelectedBlog(blog)}
              className="flex items-center gap-2 px-6 py-3 bg-[#f86f17] text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#ff8c5a] transition-all"
            >
              Read More
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </article>
    );
  };

  // Full Blog View Component
  const FullBlogView = ({ blog, onClose }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return (
      <div className="fixed inset-0 bg-[#151412]/95 z-50 overflow-y-auto">
        <div className="min-h-screen py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="mb-8 flex items-center gap-2 text-white hover:text-[#f86f17] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-semibold uppercase tracking-wider text-sm">
                Back to Blogs
              </span>
            </button>

            {/* Article Header */}
            <article className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Featured Image Area */}
              <div className="relative h-96 bg-[#efe7df]">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151412]/30" />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="inline-block px-4 py-2 bg-[#f86f17] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                    {blog.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {blog.title}
                  </h1>
                </div>
              </div>

              {/* Article Meta */}
              <div className="px-8 md:px-12 py-8 border-b-2 border-[#efe7df]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#f86f17] flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-[#151412]">
                          {blog.author.name}
                        </p>
                        <p className="text-sm text-[#6e6a64]">
                          {blog.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-[#6e6a64]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#f86f17]" />
                        <span>
                          {new Date(blog.publishDate).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-blue-700" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-[#6e6a64] mr-2">Share:</span>
                    <button
                      onClick={() => shareArticle("twitter", blog)}
                      className="w-10 h-10 rounded-full bg-[#efe7df] hover:bg-[#f86f17] text-[#151412] hover:text-white transition-all flex items-center justify-center"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => shareArticle("linkedin", blog)}
                      className="w-10 h-10 rounded-full bg-[#efe7df] hover:bg-blue-700 text-[#151412] hover:text-white transition-all flex items-center justify-center"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => shareArticle("facebook", blog)}
                      className="w-10 h-10 rounded-full bg-[#efe7df] hover:bg-[#f86f17] text-[#151412] hover:text-white transition-all flex items-center justify-center"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => shareArticle("copy", blog)}
                      className="w-10 h-10 rounded-full bg-[#efe7df] hover:bg-[#151412] text-[#151412] hover:text-white transition-all flex items-center justify-center"
                    >
                      <LinkIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 mt-6 text-sm">
                  <div className="flex items-center gap-2 text-[#6e6a64]">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views} views</span>
                  </div>
                  <button
                    onClick={() => handleLike(blog.id)}
                    className={`flex items-center gap-2 transition-colors ${
                      likedBlogs.includes(blog.id)
                        ? "text-[#f86f17]"
                        : "text-[#6e6a64] hover:text-[#f86f17]"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedBlogs.includes(blog.id) ? "fill-current" : ""
                      }`}
                    />
                    <span>{blog.likes} likes</span>
                  </button>
                  <div className="flex items-center gap-2 text-[#6e6a64]">
                    <MessageCircle className="w-4 h-4" />
                    <span>{blog.comments.length} comments</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <div className="px-8 md:px-12 py-12">
                <div className="prose prose-lg max-w-none">
                  {blog.content.map((section, idx) => {
                    switch (section.type) {
                      case "paragraph":
                        return (
                          <p
                            key={idx}
                            className="text-[#151412] leading-relaxed mb-6 text-lg"
                          >
                            {section.text}
                          </p>
                        );
                      case "heading":
                        return (
                          <h2
                            key={idx}
                            className="text-3xl font-bold text-[#151412] mt-12 mb-6 uppercase tracking-tight"
                          >
                            {section.text}
                          </h2>
                        );
                      case "subheading":
                        return (
                          <h3
                            key={idx}
                            className="text-2xl font-bold text-[#f86f17] mt-8 mb-4"
                          >
                            {section.text}
                          </h3>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t-2 border-[#efe7df]">
                  <p className="text-sm font-bold uppercase tracking-wider text-[#6e6a64] mb-4">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-[#efe7df] text-[#151412] text-sm rounded-full hover:bg-[#f86f17] hover:text-white transition-all cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="px-8 md:px-12 py-12 bg-[#efe7df]/30">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold uppercase tracking-tight">
                    Comments{" "}
                    <span className="text-[#f86f17]">
                      ({blog.comments.length})
                    </span>
                  </h3>
                  <button
                    onClick={() => setShowCommentForm(!showCommentForm)}
                    className="px-6 py-3 bg-[#f86f17] text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#ff8c5a] transition-all"
                  >
                    Add Comment
                  </button>
                </div>

                {/* Comment Form */}
                {showCommentForm && (
                  <div className="bg-white rounded-2xl p-8 mb-8 shadow-lg">
                    <h4 className="text-xl font-bold mb-6 uppercase">
                      Leave a Comment
                    </h4>
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Your Name"
                          value={commentName}
                          onChange={(e) => setCommentName(e.target.value)}
                          className="px-4 py-3 rounded-xl border-2 border-black/10 bg-[#efe7df]/50 focus:border-[#f86f17] focus:outline-none transition-colors"
                        />
                        <input
                          type="email"
                          placeholder="Your Email"
                          value={commentEmail}
                          onChange={(e) => setCommentEmail(e.target.value)}
                          className="px-4 py-3 rounded-xl border-2 border-black/10 bg-[#efe7df]/50 focus:border-[#f86f17] focus:outline-none transition-colors"
                        />
                      </div>
                      <textarea
                        placeholder="Your Comment"
                        rows="4"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border-2 border-black/10 bg-[#efe7df]/50 focus:border-[#f86f17] focus:outline-none transition-colors resize-none"
                      />
                      <div className="flex gap-4">
                        <button
                          onClick={handleCommentSubmit}
                          className="px-8 py-3 bg-[#f86f17] text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#ff8c5a] transition-all"
                        >
                          Submit Comment
                        </button>
                        <button
                          onClick={() => setShowCommentForm(false)}
                          className="px-8 py-3 bg-[#6e6a64] text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#151412] transition-all"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Comments List */}
                <div className="space-y-6">
                  {blog.comments.map((comment) => (
                    <div
                      key={comment.id}
                      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="font-bold text-[#151412]">
                                {comment.author}
                              </p>
                              <p className="text-sm text-[#6e6a64]">
                                {comment.role}
                              </p>
                            </div>
                            <span className="text-sm text-[#6e6a64]">
                              {new Date(comment.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-[#151412] leading-relaxed mb-4">
                            {comment.comment}
                          </p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 text-sm text-[#6e6a64] hover:text-[#f86f17] transition-colors">
                              <Heart className="w-4 h-4" />
                              <span>{comment.likes}</span>
                            </button>
                            <button className="text-sm text-[#6e6a64] hover:text-blue-700 transition-colors">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Articles */}
              <div className="px-8 md:px-12 py-12">
                <h3 className="text-3xl font-bold uppercase tracking-tight mb-8">
                  Related <span className="text-blue-700">Articles</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {blogsData.blogs
                    .filter((b) => b.id !== blog.id)
                    .slice(0, 2)
                    .map((relatedBlog) => (
                      <div
                        key={relatedBlog.id}
                        onClick={() => setSelectedBlog(relatedBlog)}
                        className="bg-[#efe7df]/50 rounded-2xl p-6 hover:bg-[#efe7df] transition-all cursor-pointer border-2 border-transparent hover:border-[#f86f17]/30"
                      >
                        <span className="inline-block px-3 py-1 bg-[#f86f17] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                          {relatedBlog.category}
                        </span>
                        <h4 className="text-xl font-bold mb-3 line-clamp-2">
                          {relatedBlog.title}
                        </h4>
                        <p className="text-[#6e6a64] text-sm line-clamp-2 mb-4">
                          {relatedBlog.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-[#f86f17] font-semibold">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  };

  if (selectedBlog) {
    return (
      <FullBlogView blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
    );
  }

  return (
    <div className="min-h-screen bg-[#efe7df] text-[#151412]">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#151412] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#f86f17] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-extralight uppercase tracking-tight text-white mb-6">
              Leadership <span className="text-[#f86f17]">Insights</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Evidence-based perspectives on executive coaching, organizational
              development, and leadership transformation
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6e6a64]" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-full bg-white border-2 border-white/20 focus:border-[#f86f17] focus:outline-none transition-colors text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b-2 border-[#efe7df] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  selectedCategory === "all"
                    ? "bg-[#f86f17] text-white"
                    : "bg-[#efe7df] text-[#151412] hover:bg-[#f86f17] hover:text-white"
                }`}
              >
                All Articles
              </button>
              {blogsData.categories.slice(0, 3).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                    selectedCategory === category.name
                      ? "bg-blue-700 text-white"
                      : "bg-[#efe7df] text-[#151412] hover:bg-blue-700 hover:text-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Sort & Filter */}
            <div className="flex items-center gap-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-full bg-[#efe7df] text-[#151412] text-sm font-bold uppercase border-2 border-transparent focus:border-[#f86f17] focus:outline-none cursor-pointer"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="mostLiked">Most Liked</option>
              </select>

              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="px-6 py-3 rounded-full bg-[#f86f17] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#ff8c5a] transition-all flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>

          {/* Selected Tags Display */}
          {selectedTags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="text-sm text-[#6e6a64]">Active filters:</span>
              {selectedTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className="flex items-center gap-2 px-4 py-2 bg-[#f86f17] text-white text-sm rounded-full hover:bg-[#ff8c5a] transition-all"
                >
                  <span>{tag}</span>
                  <X className="w-3 h-3" />
                </button>
              ))}
              <button
                onClick={() => setSelectedTags([])}
                className="text-sm text-[#f86f17] hover:text-[#ff8c5a] font-semibold"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Advanced Filter Panel */}
      {filterOpen && (
        <section className="py-8 bg-white border-b-2 border-[#efe7df]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold uppercase">Filter by Tags</h3>
              <button
                onClick={() => setFilterOpen(false)}
                className="text-[#6e6a64] hover:text-[#151412]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {blogsData.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-[#f86f17] text-white"
                      : "bg-[#efe7df] text-[#151412] hover:bg-[#f86f17] hover:text-white"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured Article */}
      {sortedBlogs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-[#f86f17]" />
              <h2 className="text-3xl font-bold uppercase tracking-tight">
                Featured Article
              </h2>
            </div>

            <div className="bg-[#151412] rounded-3xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-96 md:h-auto bg-[#f86f17] opacity-20" />

                <div className="p-12">
                  <span className="inline-block px-4 py-2 bg-[#f86f17] text-white text-xs font-bold uppercase tracking-wider rounded-full mb-6">
                    {sortedBlogs[0].category}
                  </span>

                  <h3 className="text-4xl font-bold text-white mb-6">
                    {sortedBlogs[0].title}
                  </h3>

                  <p className="text-white/80 text-lg leading-relaxed mb-8">
                    {sortedBlogs[0].excerpt}
                  </p>

                  <div className="flex items-center gap-6 mb-8 text-sm text-white/60">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(
                          sortedBlogs[0].publishDate,
                        ).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{sortedBlogs[0].readTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span>{sortedBlogs[0].views} views</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedBlog(sortedBlogs[0])}
                    className="flex items-center gap-3 px-8 py-4 bg-[#f86f17] text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#ff8c5a] transition-all"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {sortedBlogs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#efe7df] flex items-center justify-center">
                <Search className="w-12 h-12 text-[#6e6a64]" />
              </div>
              <h3 className="text-3xl font-bold mb-4">No articles found</h3>
              <p className="text-[#6e6a64] mb-8">
                Try adjusting your filters or search query
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setSelectedTags([]);
                }}
                className="px-8 py-4 bg-[#f86f17] text-white rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#ff8c5a] transition-all"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold uppercase tracking-tight">
                  All <span className="text-blue-700">Articles</span>
                  <span className="text-[#6e6a64] ml-4 text-xl">
                    ({sortedBlogs.length})
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#151412] rounded-3xl p-12 md:p-16 text-center">
            <div className="max-w-3xl mx-auto">
              <Mail className="w-16 h-16 text-[#f86f17] mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
                Stay <span className="text-[#f86f17]">Informed</span>
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Get the latest leadership insights, coaching strategies, and
                organizational development tips delivered to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 rounded-full bg-white text-[#151412] focus:outline-none focus:ring-2 focus:ring-[#f86f17]"
                />
                <button
                  onClick={handleSubscribe}
                  className="px-8 py-4 bg-[#f86f17] text-white rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#ff8c5a] transition-all whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </div>

              <p className="text-white/60 text-sm mt-6">
                Join 5,000+ leaders receiving weekly insights
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-20 bg-[#efe7df]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold uppercase tracking-tight mb-12 text-center">
            Explore by <span className="text-[#f86f17]">Category</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogsData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.name);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-white rounded-2xl p-8 text-left hover:shadow-xl transition-all border-2 border-transparent hover:border-[#f86f17]/30 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Tag className="w-8 h-8 text-[#f86f17] group-hover:scale-110 transition-transform" />
                  <span className="px-3 py-1 bg-[#efe7df] text-[#151412] text-xs font-bold rounded-full">
                    {category.count} articles
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f86f17] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[#6e6a64] leading-relaxed">
                  {category.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-700">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
            Ready to Transform Your Leadership?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Discover how our evidence-based coaching can elevate your impact and
            drive sustainable organizational excellence
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/services"
              className="px-10 py-5 bg-[#f86f17] text-white rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#ff8c5a] transition-all shadow-2xl"
            >
              Explore Services
            </a>
            <a
              href="/contact"
              className="px-10 py-5 bg-white text-blue-700 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-[#efe7df] transition-all shadow-2xl"
            >
              Schedule Discovery Call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#151412] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="text-[5rem] md:text-[8rem] lg:text-[11rem] font-extralight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#f86f17] via-white to-blue-700 select-none mb-6">
              INSIGHTS
            </div>
            <p className="text-white/60 text-sm uppercase tracking-widest">
              Empowering Leadership Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
