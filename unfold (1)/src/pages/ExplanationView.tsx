import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, List, Settings2, Sparkles, BookOpen, 
  MessageSquare, Wand2, HelpCircle, Share2, 
  ChevronRight, AlignLeft, BarChart3, AlertCircle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ExplanationView() {
  const [selectedText, setSelectedText] = useState("");
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState("content");

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();
    if (text && text.length > 2) {
      const range = selection?.getRangeAt(0);
      const rect = range?.getBoundingClientRect();
      if (rect) {
        setSelectedText(text);
        setTooltipPos({ x: rect.left + rect.width / 2, y: rect.top + window.scrollY - 40 });
      }
    } else {
      setSelectedText("");
    }
  };

  return (
    <div className="min-h-screen bg-brand-gray flex flex-col" onMouseUp={handleMouseUp}>
      {/* View Header */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link to="/workspace" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div className="h-6 w-px bg-slate-200" />
          <div>
            <h2 className="text-sm font-bold text-slate-900 leading-tight">경영학원론 4주차 강의자료.pdf</h2>
            <p className="text-[10px] font-bold text-brand-primary uppercase tracking-widest">시험대비 모드 · 상세 설명 중</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/visualize" className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <Wand2 size={14} /> 시각화하기
          </Link>
          <Link to="/exam" className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-emerald-600 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
            <HelpCircle size={14} /> 예상문제 생성
          </Link>
          <button className="p-2 text-slate-400 hover:text-slate-900">
            <Settings2 size={18} />
          </button>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-slate-800">
            PDF 저장
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left: Outline */}
        <aside className="w-64 bg-white border-r border-slate-200 hidden xl:block overflow-y-auto p-6">
          <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 px-2">Outline</h5>
          <div className="space-y-4">
            {[
              "1. 마케팅의 정의와 개념",
              "2. 마케팅 믹스 (4P) 전략",
              "2.1 Product (제품)",
              "2.2 Price (가격)",
              "2.3 Place (유통)",
              "2.4 Promotion (촉진)",
              "3. STP 분석 프레임워크",
              "4. 소비자 행동 프로세스"
            ].map((title, i) => (
              <div 
                key={i} 
                className={`text-xs font-semibold px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${i === 2 ? "text-brand-primary bg-sky-50" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}
              >
                {title}
              </div>
            ))}
          </div>
        </aside>

        {/* Center: Main Content */}
        <main className="flex-1 overflow-y-auto bg-slate-50 relative py-12 px-4 sm:px-12 flex justify-center">
          <div className="max-w-3xl w-full bg-white shadow-sm border border-slate-200 rounded-3xl p-10 sm:p-20 relative min-h-[1200px]">
            <article className="prose prose-slate max-w-none">
              <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">제2장: 마케팅 믹스의 구성과 전략</h1>
              
              <section className="mb-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-sky-100 text-[10px] font-bold text-brand-primary rounded">Concept 01</span>
                  <h3 className="text-xl font-bold text-slate-800 m-0">마케팅 믹스(Marketing Mix)의 개요</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  마케팅 믹스(Marketing Mix)는 기업이 마케팅 목표를 달성하기 위해 동원하는 마케팅 도구들의 조합을 의미합니다. 
                  전통적으로 제롬 매카시(Jerome McCarthy)가 제안한 4P 이론이 가장 널리 쓰이며, 
                  이는 제품(Product), 가격(Price), 유통(Place), 촉진(Promotion)으로 구성됩니다.
                </p>
                <div className="bg-sky-50 border-l-4 border-brand-primary p-6 rounded-r-2xl my-8">
                   <h5 className="text-brand-primary font-bold text-sm mb-2 flex items-center gap-2">
                     <Sparkles size={16} /> 생략 없는 상세 설명 (시험대비 모드)
                   </h5>
                   <p className="text-slate-600 text-sm leading-relaxed">
                     여기서 '조합(Mix)'이라는 단어에 주목해야 합니다. 단순히 4개를 각각 잘하는 것이 아니라, 
                     Targeting된 고객의 니즈에 맞춰 4가지 도구가 하나의 유기적인 흐름으로 연결되어야 합니다. 
                     예를 들어, 프리미엄 고급 제품(Product)을 만들면서 가격(Price)을 저가로 책정하거나 구석진 할인점(Place)에서 판매한다면 
                     마케팅 믹스의 불일치가 발생하게 됩니다.
                   </p>
                </div>
              </section>

              <section className="mb-12">
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-2 py-1 bg-emerald-100 text-[10px] font-bold text-emerald-600 rounded">Key Point</span>
                  <h3 className="text-xl font-bold text-slate-800 m-0">Product: 제품 전략의 핵심</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                   제품 전략은 단순한 실체뿐만 아니라 서비스, 보증, 브랜드 이미지 등을 포함하는 포괄적인 개념입니다.
                   고객은 물리적 실체를 구매하는 것이 아니라 해당 제품이 제공하는 '가치'와 '문제 해결'을 구매하는 것이기 때문입니다.
                </p>
                
                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 text-sm mb-1 uppercase">핵심 가치</div>
                    <p className="text-xs text-slate-500">본질적인 필요 충족<br />(예: 숙박의 필요성)</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="font-bold text-slate-900 text-sm mb-1 uppercase">유형 제품</div>
                    <p className="text-xs text-slate-500">브랜드명, 품질, 디자인<br />(예: 인테리어, 침구)</p>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed">
                   시험에서는 이러한 제품의 계층적 구조(핵심-유형-확장 제품)를 묻는 문제가 자주 출제됩니다. 
                   확장 제품(Augmented Product)은 배달, 사후 서비스, 신용 판매 등을 포함하며 차별화의 핵심 요소가 됩니다.
                </p>
              </section>

              <div className="h-48 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-400 group cursor-pointer hover:bg-slate-100 transition-colors">
                 <Settings2 size={24} className="mb-2" />
                 <p className="text-sm font-bold">다음 섹션 설명 계속 펼치기</p>
                 <p className="text-[10px]">클릭 시 나머지 내용을 빠짐없이 생성합니다.</p>
              </div>
            </article>
          </div>

          {/* Floaing Action Menu */}
          <AnimatePresence>
            {selectedText && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 10 }}
                style={{ left: tooltipPos.x, top: tooltipPos.y }}
                className="fixed z-50 -translate-x-1/2 flex items-center bg-slate-900 text-white rounded-xl shadow-2xl p-1 gap-1 overflow-hidden border border-slate-800"
              >
                <button className="px-3 py-2 text-[10px] font-bold hover:bg-slate-800 rounded-lg flex flex-col items-center gap-1 transition-colors">
                  <Wand2 size={14} className="text-brand-primary" /> 이미지화
                </button>
                <div className="w-px h-6 bg-slate-700 mx-1" />
                <button className="px-3 py-2 text-[10px] font-bold hover:bg-slate-800 rounded-lg flex flex-col items-center gap-1 transition-colors">
                  <MessageSquare size={14} className="text-brand-primary" /> 더 쉽게
                </button>
                <div className="w-px h-6 bg-slate-700 mx-1" />
                <button className="px-3 py-2 text-[10px] font-bold hover:bg-slate-800 rounded-lg flex flex-col items-center gap-1 transition-colors text-emerald-400">
                  <HelpCircle size={14} /> 문제로 만들기
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Right: Tools Panel */}
        <aside className="w-80 bg-white border-l border-slate-200 hidden lg:flex flex-col">
           <div className="flex border-b border-slate-100">
             {["content", "summary"].map((tab) => (
               <button 
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`flex-1 py-4 text-xs font-bold transition-all relative ${activeTab === tab ? "text-brand-primary" : "text-slate-400"}`}
               >
                 {tab === "content" ? "학습 도구" : "핵심 키워드"}
                 {activeTab === tab && <motion.div layoutId="tab" className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-primary" />}
               </button>
             ))}
           </div>

           <div className="flex-1 p-6 overflow-y-auto">
             <div className="space-y-8">
               <div>
                 <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Exam Points</h6>
                 <div className="space-y-3">
                   {[
                     "4P 마케팅 믹스의 유기적 통합성",
                     "제품의 3층 구조 (핵심-유형-확장)",
                     "서비스 제품의 특성과 4P 적용"
                   ].map((point, i) => (
                     <div key={i} className="flex gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                       <BarChart3 size={16} className="text-brand-primary shrink-0" />
                       <span className="text-xs font-semibold text-slate-700">{point}</span>
                     </div>
                   ))}
                 </div>
               </div>

               <div>
                 <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Confusing Areas</h6>
                 <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                   <div className="flex items-center gap-2 text-amber-600 mb-2">
                     <AlertCircle size={14} />
                     <span className="text-[11px] font-bold">주의가 필요해요</span>
                   </div>
                   <p className="text-[11px] text-amber-900/70 font-medium leading-relaxed">
                     촉진(Promotion)과 마케팅 전체를 혼동하는 경우가 많습니다. 촉진은 마케팅 믹스의 일부일 뿐임을 명심하세요!
                   </p>
                 </div>
               </div>

               <div className="pt-4 border-t border-slate-100">
                  <h6 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Stats</h6>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-brand-gray rounded-xl">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">분량</div>
                      <div className="text-sm font-bold text-slate-700">624 단어</div>
                    </div>
                    <div className="p-3 bg-brand-gray rounded-xl">
                      <div className="text-[10px] font-bold text-slate-400 uppercase">예상 시간</div>
                      <div className="text-sm font-bold text-slate-700">4분</div>
                    </div>
                  </div>
               </div>
             </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
