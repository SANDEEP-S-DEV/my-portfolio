import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Search, Calendar, Clock, ChevronLeft, ChevronRight, ArrowLeft, Home as HomeIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MOCK_BLOGS } from "@/lib/mock-blogs";

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;

  const filteredBlogs = useMemo(() => {
    return MOCK_BLOGS
      .filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Navigation & Breadcrumbs */}
          <div className="flex flex-col gap-6 mb-12">
            <div className="flex items-center justify-between">
              <Link href="/">
                <button className="flex items-center text-sm text-white/40 hover:text-primary transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                </button>
              </Link>
              
              <nav className="flex items-center gap-2 text-xs font-medium text-white/30">
                <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                  <HomeIcon className="w-3 h-3" /> Home
                </Link>
                <ChevronRightIcon className="w-3 h-3" />
                <span className="text-primary/80">Blogs</span>
              </nav>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Insights & Writing</h1>
                <p className="text-white/50">My thoughts on AI, design, and the intersection of technology and humanity.</p>
              </div>
              
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 bg-white/5 border-white/10 text-white"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {paginatedBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/blogs/${blog.id}`}>
                  <Card className="bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-primary/50 transition-all cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-4 text-xs text-white/40 mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {blog.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors">{blog.title}</CardTitle>
                      <CardDescription className="text-white/60 line-clamp-2 mt-2">{blog.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-white/5 text-white/40 border-transparent">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}

            {filteredBlogs.length === 0 && (
              <div className="text-center py-24">
                <p className="text-white/40">No articles found matching your search.</p>
              </div>
            )}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 text-white"
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" /> Previous
              </Button>
              <span className="text-sm text-white/40">Page {currentPage} of {totalPages}</span>
              <Button
                variant="outline"
                size="sm"
                className="border-white/10 text-white"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Next <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
