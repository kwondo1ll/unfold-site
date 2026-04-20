import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, Wand2, Download, RefreshCcw, 
  Layers, Copy, Layout, Palette, Image as ImageIcon, 
  Maximize2, ArrowRight, Sparkles 
} from "lucide-react";

export default function Visualize() {
  const [selectedStyle, setSelectedStyle] = useState("note");

  const visualizations = [
    {
      id: 1,
      title: "마케팅 믹스 4P 핵심 요약",
      type: "개념 요약 카드",
      img: "https://picsum.photos/seed/marketing/800/600",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "제품의 계층 구조 (3단계)",
      type: "흐름도 / 인포그래픽",
      img: "https://picsum.photos/seed/product/800/600",
      color: "bg-emerald-500"
    },
    {
      id: 3,
      title: "STP vs 4P 전략 비교표",
      type: "비교표",
      img: "https://picsum.photos/seed/compare/800/600",
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray pb-20">
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link to="/workspace" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h2 className="text-sm font-bold text-slate-900 leading-tight">Visualize</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            <Palette size={14} /> 테마 설정
          </button>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            전체 다운로드
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pt-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Controls */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Visualize</h1>
              <p className="text-slate-500 text-sm leading-relaxed">복잡한 개념을 한눈에 들어오는 시각 자료로 변환합니다.</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-4">시각화 방식</label>
                <div className="space-y-2">
                  {[
                    { id: "note", name: "깔끔한 노트형", icon: Layers },
                    { id: "flow", name: "핵심 흐름도", icon: Layout },
                    { id: "compare", name: "비교 정리표", icon: Copy },
                    { id: "mind", name: "마인드맵", icon: ImageIcon }
                  ].map(style => (
                    <button 
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`w-full flex items-center gap-3 p-4 rounded-2xl text-sm font-bold transition-all border ${selectedStyle === style.id ? "bg-white border-brand-primary text-brand-primary shadow-sm" : "bg-white border-slate-100 text-slate-500 hover:border-slate-200"}`}
                    >
                      <style.icon size={18} />
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <button className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-sky-400 shadow-xl shadow-sky-100 flex items-center justify-center gap-2 transition-all">
                  이미지 생성하기 <Sparkles size={18} />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-4 leading-relaxed">드래그한 텍스트나 핵심 키워드를 바탕으로 이미지를 렌더링합니다.</p>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div className="lg:col-span-3">
             <div className="grid sm:grid-cols-2 gap-8">
                {visualizations.map((v) => (
                  <div key={v.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
                    <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                       <img 
                        src={v.img} 
                        alt={v.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform">
                          <div className="flex items-center justify-between text-white">
                             <div className="flex items-center gap-2 text-[10px] font-bold text-sky-300 uppercase tracking-widest">
                               <Wand2 size={12} /> {v.type}
                             </div>
                             <div className="flex items-center gap-2">
                                <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/40 transition-colors">
                                   <Maximize2 size={16} />
                                </button>
                                <button className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white/40 transition-colors">
                                   <Download size={16} />
                                </button>
                             </div>
                          </div>
                          <h4 className="text-xl font-bold text-white mt-2 leading-tight">{v.title}</h4>
                       </div>
                    </div>
                    <div className="p-6">
                       <div className="flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${v.color}`} />
                            <span className="text-xs font-bold text-slate-500">생성 완료 · 3분 전</span>
                         </div>
                         <button className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:underline">
                            편집하기 <ArrowRight size={12} />
                         </button>
                       </div>
                    </div>
                  </div>
                ))}

                <button className="aspect-[4/3] border-4 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center text-slate-300 hover:border-slate-200 hover:text-slate-400 transition-all group">
                   <RefreshCcw size={40} className="mb-4 group-hover:rotate-180 transition-transform duration-500" />
                   <p className="font-bold text-lg">새로운 시각화 추가</p>
                   <p className="text-xs mt-1">드래그한 내용을 이미지로 바꿔보세요</p>
                </button>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
