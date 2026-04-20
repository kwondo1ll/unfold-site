import { Link } from "react-router-dom";
import { 
  Folder, Clock, FileText, HelpCircle, 
  ImageIcon, Star, ChevronRight, Plus, 
  Settings, LogOut, Search, MoreHorizontal,
  GraduationCap
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-gray">
      {/* Sidebar - Shared structure but integrated for dashboard */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-12">
        {/* Profile & Sidebar */}
        <aside className="md:w-80 space-y-8">
           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm text-center">
             <div className="w-20 h-20 bg-sky-100 rounded-full mx-auto mb-4 flex items-center justify-center ring-4 ring-sky-50 shadow-inner">
                <span className="text-2xl font-bold text-brand-primary">JD</span>
             </div>
             <h3 className="text-lg font-bold text-slate-900 mb-1">Kim Unfold</h3>
             <p className="text-xs text-slate-600 font-medium mb-4">마케팅 원론 외 4과목 학습 중</p>
             <Link to="/workspace" className="w-full flex items-center justify-center gap-2 py-2.5 bg-brand-primary text-white rounded-xl text-xs font-bold hover:bg-sky-400 transition-all shadow-sm">
                <Plus size={16} /> 새 파일 분석
             </Link>
           </div>

           <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-3 space-y-1">
                {[
                  { name: "내 학습 보관함", icon: Folder, active: true },
                  { name: "최근 상세 설명", icon: Clock },
                  { name: "내 예상문제집", icon: HelpCircle },
                  { name: "저장된 이미지", icon: ImageIcon },
                  { name: "즐겨찾기", icon: Star }
                ].map((item) => (
                  <button key={item.name} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${item.active ? "bg-sky-50 text-brand-primary" : "text-slate-600 hover:bg-slate-50"}`}>
                    <item.icon size={18} />
                    {item.name}
                  </button>
                ))}
             </div>
             <div className="border-t border-slate-100 p-3 space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
                  <Settings size={18} /> 설정
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50">
                  <LogOut size={18} /> 로그아웃
                </button>
             </div>
           </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 space-y-12">
          {/* Header Stats */}
          <section className="grid sm:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h6 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">분석한 자료</h6>
                <div className="text-3xl font-bold text-slate-900 px-1">12 <span className="text-sm font-normal text-slate-600">파일</span></div>
             </div>
             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h6 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">생성한 문제</h6>
                <div className="text-3xl font-bold text-slate-900 px-1">124 <span className="text-sm font-normal text-slate-600">문항</span></div>
             </div>
             <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h6 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 px-1">학습 평점</h6>
                <div className="flex items-center gap-2 px-1">
                  <span className="text-3xl font-bold text-slate-900">A+</span>
                  <GraduationCap className="text-brand-primary" size={24} />
                </div>
             </div>
          </section>

          {/* Recent Files List */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">최근 학습한 자료</h2>
              <div className="flex bg-white rounded-xl border border-slate-200 p-1">
                 <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg"><Search size={18} /></button>
                 <button className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-50 rounded-lg"><MoreHorizontal size={18} /></button>
              </div>
            </div>

            <div className="space-y-4">
               {[
                 { name: "경영학원론 중간고사_A4.pdf", folder: "경영학원론", date: "어제", problems: 10 },
                 { name: "마케팅 전략 개념 비교표.png", folder: "마케팅", date: "2일 전", problems: 5 },
                 { name: "서양 철학사 고대 그리스.docx", folder: "인문교양", date: "3일 전", problems: 0 }
               ].map((file, i) => (
                 <Link to="/explanation" key={i} className="bg-white p-4 pr-8 rounded-[2rem] border border-slate-100 flex items-center justify-between group hover:border-brand-primary hover:shadow-xs transition-all">
                    <div className="flex items-center gap-5">
                       <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-600 group-hover:bg-sky-50 group-hover:text-brand-primary transition-colors">
                          <FileText size={28} />
                       </div>
                       <div>
                          <div className="text-[10px] font-bold text-slate-600 uppercase mb-1 tracking-wider">{file.folder}</div>
                          <h4 className="font-bold text-slate-800 text-lg group-hover:text-brand-primary transition-colors">{file.name}</h4>
                          <div className="flex items-center gap-4 text-xs font-medium text-slate-600 mt-1">
                             <span>{file.date} 업로드</span>
                             {file.problems > 0 && <span className="flex items-center gap-1 text-emerald-600 font-bold"><HelpCircle size={12} /> 문제 {file.problems}개</span>}
                          </div>
                       </div>
                    </div>
                    <ChevronRight className="text-slate-200 group-hover:text-brand-primary group-hover:translate-x-2 transition-all" size={24} />
                 </Link>
               ))}
            </div>
            
            <button className="w-full mt-6 py-4 border-2 border-dashed border-slate-200 rounded-[2rem] text-slate-400 font-bold hover:bg-white hover:border-slate-300 transition-all flex items-center justify-center gap-2">
               전체 기록 보러가기 <ChevronRight size={18} />
            </button>
          </section>

          {/* Visualization Snippets */}
          <section>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">저장된 시각화 카드</h2>
              <Link to="/visualize" className="text-sm font-bold text-brand-primary hover:underline">디자인 더보기</Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="aspect-[4/5] bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all group relative">
                   <img 
                    src={`https://picsum.photos/seed/study-${i}/400/500`} 
                    alt="Study card" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                   />
                   {/* No Overlay */}
                 </div>
               ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
