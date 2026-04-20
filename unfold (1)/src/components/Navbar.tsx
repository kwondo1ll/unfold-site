import { Link, useLocation } from "react-router-dom";
import { BookOpen, FolderOpen, LayoutDashboard, Wand2, FileText, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", icon: LayoutDashboard },
    { name: "Workspace", path: "/workspace", icon: FolderOpen },
    { name: "Exam", path: "/exam", icon: FileText },
    { name: "Visualize", path: "/visualize", icon: Wand2 },
    { name: "Dashboard", path: "/dashboard", icon: BookOpen },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <BookOpen className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">UnFold</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                  isActive(item.path) ? "text-brand-primary" : "text-slate-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/workspace"
              className="bg-brand-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-sky-400 transition-all shadow-sm flex items-center gap-2"
            >
              파일 업로드하기
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-3 rounded-xl ${
                    isActive(item.path) ? "bg-sky-50 text-brand-primary" : "text-slate-600"
                  }`}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              <div className="pt-4 px-2">
                <Link
                  to="/workspace"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full block text-center bg-brand-primary text-white py-3 rounded-xl font-semibold"
                >
                  파일 업로드하기
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
