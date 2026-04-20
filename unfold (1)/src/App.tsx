/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Workspace from "./pages/Workspace";
import ExplanationView from "./pages/ExplanationView";
import ExamGenerator from "./pages/ExamGenerator";
import SolutionsView from "./pages/SolutionsView";
import Visualize from "./pages/Visualize";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/explanation" element={<ExplanationView />} />
            <Route path="/exam" element={<ExamGenerator />} />
            <Route path="/solutions" element={<SolutionsView />} />
            <Route path="/visualize" element={<Visualize />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-white border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-slate-200 rounded-lg flex items-center justify-center">
                <span className="font-bold text-slate-500">U</span>
              </div>
              <span className="text-xl font-bold text-slate-900">UnFold</span>
            </div>
            <p className="text-sm">복잡한 자료를 펼쳐서 이해하기 쉽게 만들어주는 학습 AI 플랫폼</p>
            <div className="mt-8 flex justify-center space-x-6 text-sm">
              <a href="#" className="hover:text-brand-primary">이용약관</a>
              <a href="#" className="hover:text-brand-primary">개인정보처리방침</a>
              <a href="#" className="hover:text-brand-primary">문의하기</a>
            </div>
            <p className="mt-8 text-xs text-slate-400">© 2026 UnFold. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

