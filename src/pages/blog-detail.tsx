import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Home as HomeIcon, ChevronRight } from "lucide-react";
import { MOCK_BLOGS } from "@/lib/mock-blogs";
import NotFound from "@/pages/not-found";

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = MOCK_BLOGS.find(b => b.id === id);

  if (!blog) return <NotFound />;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between mb-12">
            <Link href="/blogs">
              <button className="flex items-center text-sm text-white/40 hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
              </button>
            </Link>

            <nav className="flex items-center gap-2 text-xs font-medium text-white/30">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <HomeIcon className="w-3 h-3" /> Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/blogs" className="hover:text-white transition-colors">
                Blogs
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary/80 truncate max-w-[100px] md:max-w-none">
                {blog.title}
              </span>
            </nav>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-white/40 mb-6">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blog.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div 
            className="prose prose-invert prose-primary max-w-none 
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:text-lg
              prose-headings:text-white prose-headings:font-display
              prose-strong:text-white prose-li:text-white/70"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </motion.div>
      </div>
    </div>
  );
}
