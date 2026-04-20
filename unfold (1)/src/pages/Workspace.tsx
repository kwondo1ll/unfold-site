import { useState } from "react";
import { Link } from "react-router-dom";
import { FileUp, FileText, Search, Plus, Filter, Clock, MoreVertical, Play, Star, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function Workspace() {
  const [dragActive, setDragActive] = useState(false);
  const [selectedMode, setSelectedMode] = useState("intermediate");

  const recentFiles = [
    { name: "경영학원론 4주차 강의자료.pdf", type: "PDF", date: "2시간 전", pages: "12", id: 1 },
    { name: "마케팅 전략 중간고사 대비.png", type: "IMAGE", date: "1일 전", pages: "1", id: 2 },
    { name: "소비자 행동론 기말 정리.docx", type: "DOCX", date: "3일 전", pages: "8", id: 3 },
  ];

  const modes = [
    { id: "beginner", name: "입문", desc: "기초 개념부터 아주 쉽게 설명" },
    { id: "intermediate", name: "중급", desc: "전공 수준의 핵심 내용 위주" },
    { id: "advanced", name: "고급", desc: "심화 개념과 세부 구조 포함" },
    { id: "exam", name: "시험대비", desc: "출제 포인트 및 요약 중심" },
  ];

  return (
    <div className="min-h-screen bg-brand-gray flex">
      {/* Workspace Sidebar */}
      <aside className="w-72 bg-white border-r border-slate-200 hidden lg:flex flex-col">
        <div className="p-6">
          <button className="w-full py-3 bg-brand-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-sky-400 transition-all">
            <Plus size={18} /> 새 파일 업로드
          </button>
        </div>
        
        <nav className="flex-1 px-4 space-y-8 mt-4">
          <div>
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-4">Study Folders</h5>
            <div className="space-y-1">
              {["전공 과목", "교양 과목", "취업/자격증", "미분류 자료"].map((folder) => (
                <div key={folder} className="px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50 rounded-lg cursor-pointer flex items-center justify-between">
                  <span>{folder}</span>
                  <span className="text-[10px] font-bold text-slate-400">12</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-2 mb-4">Quick Filters</h5>
            <div className="space-y-1 px-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary bg-sky-50 p-2 rounded-lg">
                <Clock size={16} /> 최근 업로드
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                <Star size={16} /> 즐겨찾기
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">
        <header className="flex justify-between items-end mb-12">
          <div>
             <h1 className="text-3xl font-bold text-slate-900 mb-2">Study Workspace</h1>
             <p className="text-slate-500">자료를 업로드하고 깊이 있는 학습을 시작하세요.</p>
          </div>
          <div className="flex items-center gap-3">
             <div className="relative group">
                <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="자료 제목 검색..." 
                  className="pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-brand-primary outline-none transition-all w-64 shadow-sm" 
                />
             </div>
             <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 hover:bg-slate-50">
               <Filter size={18} />
             </button>
          </div>
        </header>

        {/* Upload Area */}
        <section className="mb-12">
           <motion.div 
              onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
              onDragLeave={() => setDragActive(false)}
              className={`border-3 border-dashed rounded-3xl p-16 text-center transition-all cursor-pointer bg-white ${dragActive ? "border-brand-primary bg-sky-50/30 scale-[0.99]" : "border-slate-200"}`}
           >
              <div className="w-20 h-20 bg-brand-gray rounded-full mx-auto flex items-center justify-center mb-6">
                <FileUp className={dragActive ? "text-brand-primary" : "text-slate-400"} size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">여기에 강의자료나 전공책 PDF를 업로드하세요</h3>
              <p className="text-slate-500 mb-8">PDF, PNG, JPG, DOCX 형식을 지원합니다 (최대 50MB)</p>
              <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">내 컴퓨터에서 탐색</button>
           </motion.div>
        </section>

        {/* Mode & Options Area */}
        <section className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="text-brand-primary" size={20} /> 학습 모드 선택
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
               {modes.map((mode) => (
                 <button
                    key={mode.id}
                    onClick={() => setSelectedMode(mode.id)}
                    className={`p-5 rounded-2xl border-2 text-left transition-all ${selectedMode === mode.id ? "border-brand-primary bg-sky-50/50" : "border-slate-100 hover:border-slate-200 hover:bg-slate-50"}`}
                 >
                   <div className="font-bold text-slate-900 mb-1">{mode.name} 모드</div>
                   <p className="text-xs text-slate-500 font-medium">{mode.desc}</p>
                 </button>
               ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-100 flex flex-wrap gap-3">
              <div className="text-sm font-bold text-slate-900 w-full mb-2">상세 옵션</div>
              {["완전 자세히", "핵심 포함 자세히", "문단형 설명", "항목형 정리"].map(opt => (
                <button key={opt} className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:border-brand-primary transition-all">{opt}</button>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-primary/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-4">곧바로 분석하기</h4>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">자료를 업로드하면 AI가 구조를 파악하고 당신의 학습 스타일에 맞춰 최적의 설명을 준비합니다.</p>
              
              <div className="space-y-4 mb-4">
                <div className="flex items-center gap-3 text-xs font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  생략 없는 상세한 구조화 설명
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  드래그 영역 즉시 시각화 지원
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  시험 예상문제 5~10개 자동 생성
                </div>
              </div>
            </div>
            <Link to="/explanation" className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold text-center hover:bg-sky-400 transition-all flex items-center justify-center gap-2 relative z-10">
               분석 시작하기 <Play size={18} />
            </Link>
          </div>
        </section>

        {/* Recent Files Section */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-lg font-bold text-slate-900 tracking-tight">최근 업로드 자료</h4>
            <button className="text-sm font-bold text-slate-400 hover:text-brand-primary">전체 보기</button>
          </div>

          <div className="grid gap-4">
            {recentFiles.map((file) => (
              <Link to="/explanation" key={file.id} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:shadow-md transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-sky-50 group-hover:text-brand-primary transition-colors">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800 group-hover:text-brand-primary transition-colors">{file.name}</h5>
                    <div className="flex items-center gap-3 text-xs text-slate-400 font-medium mt-1">
                      <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-bold">{file.type}</span>
                      <span>{file.pages} 페이지</span>
                      <span>{file.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="hidden sm:block text-right">
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Last Mode</div>
                      <div className="text-xs font-bold text-slate-600">시험대비 모드</div>
                   </div>
                   <button className="p-2 text-slate-300 hover:text-slate-600">
                     <MoreVertical size={20} />
                   </button>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
