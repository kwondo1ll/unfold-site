import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, CheckCircle2, XCircle, ChevronRight, 
  BookOpen, FileText, Share2, Printer, 
  MessageSquare, Star, ArrowRight, RotateCcw
} from "lucide-react";

export default function SolutionsView() {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      num: "Q1",
      question: "제롬 매카시가 제안한 마케팅 믹스(4P)의 구성 요소가 아닌 것은 무엇인가요?",
      answer: "Positioning",
      explanation: "초기 4P는 Product(제품), Price(가격), Place(유통), Promotion(촉진)으로 구성됩니다. Positioning은 STP 전략의 구성 요소입니다.",
      missPoints: "STP와 4P를 섞어서 출제하는 패턴은 전형적인 시험 함정입니다.",
      ref: "원문 2페이지 제2장 중반부"
    },
    {
      id: 2,
      num: "Q2",
      question: "기업이 배달, AS, 신용 판매 등 핵심 가치 외에 부가적으로 제공하는 제품 계층을 무엇이라고 하나요?",
      answer: "확장 제품 (Augmented Product)",
      explanation: "제품의 계층 구조 중 가장 바깥쪽인 확장 제품은 물리적 속성 외에 고객에게 제공되는 부가적 혜택을 의미합니다.",
      missPoints: "유형 제품과 혼동하지 마세요. 유형 제품은 포장, 디자인, 품질 등 물리적 속성까지입니다.",
      ref: "원문 3페이지 Product 섹션"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray pb-20">
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link to="/exam" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h2 className="text-sm font-bold text-slate-900 leading-tight">Solutions & Feedback</h2>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-400 hover:text-slate-900"><Share2 size={18} /></button>
          <button className="p-2 text-slate-400 hover:text-slate-900"><Printer size={18} /></button>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            다시 풀어보기 <RotateCcw size={14} />
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 pt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
           <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">예상문제 해설보기</h1>
              <p className="text-slate-500">문제를 충분히 풀어본 뒤, 상세 해설을 통해 개념을 완성하세요.</p>
           </div>
           <div className="flex gap-2">
             {["전체 해설", "내가 틀린 문제", "서술형만"].map((filter, i) => (
               <button key={i} className={`px-4 py-2 rounded-xl text-xs font-bold border ${i === 0 ? "bg-white border-brand-primary text-brand-primary" : "bg-white border-slate-100 text-slate-400 hover:text-slate-600"}`}>
                 {filter}
               </button>
             ))}
           </div>
        </div>

        <div className="space-y-8">
           {solutions.map((sol) => (
             <div key={sol.id} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col md:flex-row">
               <div className="w-full md:w-16 bg-slate-50 border-r border-slate-100 flex items-center justify-center py-4 font-bold text-slate-400 text-xl">
                 {sol.num}
               </div>
               
               <div className="flex-1 p-8">
                  <h4 className="text-lg font-bold text-slate-800 mb-6 leading-relaxed">{sol.question}</h4>
                  
                  {showAnswer !== sol.id ? (
                    <button 
                      onClick={() => setShowAnswer(sol.id)}
                      className="w-full py-4 bg-sky-50 text-brand-primary rounded-2xl font-bold text-sm hover:bg-sky-100 transition-all border border-sky-100"
                    >
                      정답 및 해설 확인하기
                    </button>
                  ) : (
                    <div className="space-y-6">
                       <div className="flex items-start gap-4">
                         <CheckCircle2 className="text-emerald-500 shrink-0 mt-1" size={20} />
                         <div>
                            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">Correct Answer</div>
                            <div className="text-xl font-bold text-slate-900">{sol.answer}</div>
                         </div>
                       </div>

                       <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                          <h6 className="text-xs font-bold text-slate-800 mb-3 flex items-center gap-2">
                            <BookOpen size={14} className="text-brand-primary" /> 상세 해설
                          </h6>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {sol.explanation}
                          </p>
                       </div>

                       <div className="grid sm:grid-cols-2 gap-4">
                          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                             <div className="text-[10px] font-bold text-amber-600 uppercase tracking-widest mb-2">Miss Point</div>
                             <p className="text-[11px] text-amber-900/70 font-medium leading-relaxed">{sol.missPoints}</p>
                          </div>
                          <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex flex-col justify-between">
                             <div>
                                <div className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Reference</div>
                                <p className="text-[11px] text-blue-900/70 font-medium leading-relaxed">{sol.ref}</p>
                             </div>
                             <Link to="/explanation" className="text-[10px] font-bold text-brand-primary mt-2 flex items-center gap-1">
                               원문 바로보기 <ArrowRight size={10} />
                             </Link>
                          </div>
                       </div>
                    </div>
                  )}

                  <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                       <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-brand-primary">
                         <Star size={14} /> 중요 문제로 저장
                       </button>
                       <button className="flex items-center gap-1 text-[10px] font-bold text-slate-400 hover:text-brand-primary">
                         <MessageSquare size={14} /> 추가 설명 요청
                       </button>
                    </div>
                    {showAnswer === sol.id && (
                      <button 
                        onClick={() => setShowAnswer(null)}
                        className="text-[10px] font-bold text-slate-400 underline"
                      >
                        해설 다시 가리기
                      </button>
                    )}
                  </div>
               </div>
             </div>
           ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/dashboard" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
            학습 완료하고 대시보드로 이동
          </Link>
        </div>
      </main>
    </div>
  );
}
