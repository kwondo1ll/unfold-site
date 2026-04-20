import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, FileText, CheckCircle2, ChevronRight, 
  Settings, Play, Download, ExternalLink, Filter, HelpCircle 
} from "lucide-react";

export default function ExamGenerator() {
  const [examType, setExamType] = useState("mixed");
  const [isGenerated, setIsGenerated] = useState(false);

  const questions = [
    {
      id: 1,
      type: "객관식",
      text: "제롬 매카시가 제안한 마케팅 믹스(4P)의 구성 요소가 아닌 것은 무엇인가요?",
      options: ["Product", "Price", "Positioning", "Promotion"],
      difficulty: "쉬움"
    },
    {
      id: 2,
      type: "단답형",
      text: "기업이 배달, AS, 신용 판매 등 핵심 가치 외에 부가적으로 제공하는 제품 계층을 무엇이라고 하나요?",
      difficulty: "보통"
    },
    {
      id: 3,
      type: "서술형",
      text: "마케팅 믹스의 통합적 관리가 왜 중요한지 제품 전략과 가격 전략의 관계를 중심으로 설명하시오.",
      difficulty: "어려움"
    }
  ];

  return (
    <div className="min-h-screen bg-brand-gray pb-20">
      <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <Link to="/workspace" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <h2 className="text-sm font-bold text-slate-900 leading-tight">Exam Generator</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-xs font-bold text-slate-500 px-4 py-2 hover:text-brand-primary">저장 폴더 변경</button>
          <Link to="/dashboard" className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl text-xs font-bold">보관함 이동</Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pt-12">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">시험 예상문제 만들기</h1>
          <p className="text-slate-500">업로드한 자료를 바탕으로 나만의 시험지를 생성합니다.</p>
        </div>

        <section className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Options Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Settings size={16} className="text-brand-primary" /> 문제 설정
              </h4>
              
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">문제 유형</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {id: "multiple", name: "객관식"},
                      {id: "short", name: "단답형"},
                      {id: "long", name: "서술형"},
                      {id: "mixed", name: "혼합형"}
                    ].map(t => (
                      <button 
                        key={t.id}
                        onClick={() => setExamType(t.id)}
                        className={`py-2 rounded-xl text-xs font-bold transition-all border ${examType === t.id ? "bg-sky-50 border-brand-primary text-brand-primary" : "bg-white border-slate-100 text-slate-500"}`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">난이도</label>
                  <div className="flex gap-2">
                    {["쉬움", "보통", "어려움"].map(l => (
                      <button key={l} className="flex-1 py-2 rounded-xl text-xs font-bold border border-slate-100 text-slate-500 hover:border-brand-primary hover:text-brand-primary transition-all">
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3">문제 수</label>
                  <select defaultValue="10문제" className="w-full bg-slate-50 border-none rounded-xl text-sm font-bold p-3 outline-none ring-1 ring-slate-200 focus:ring-brand-primary transition-all">
                    <option>5문제</option>
                    <option>10문제</option>
                    <option>20문제</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button 
                    onClick={() => setIsGenerated(true)}
                    className="w-full py-4 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-sky-400 shadow-xl shadow-sky-100 flex items-center justify-center gap-2 transition-all"
                  >
                    문제 생성하기 <Play size={18} fill="currentColor" />
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-4">AI가 자료를 읽고 최적의 문제를 추출합니다 (약 1분 소요)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="lg:col-span-2">
            {!isGenerated ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center bg-white border border-slate-200 rounded-3xl text-center p-12">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-6">
                  <FileText size={32} className="text-slate-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">생성된 문제가 없습니다</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto">왼쪽 설정에서 유형을 고르고 생성하기 버튼을 눌러보세요.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-8 px-4">
                  <h3 className="text-lg font-bold text-slate-900">생성된 예상문제 (3)</h3>
                  <div className="flex items-center gap-3">
                    <button className="p-2 text-slate-400 hover:text-slate-900"><Download size={20} /></button>
                    <Link to="/solutions" className="bg-slate-900 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
                      정답 & 해설 보기 <ExternalLink size={14} />
                    </Link>
                  </div>
                </div>

                {questions.map((q, i) => (
                  <div key={q.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group hover:border-brand-primary transition-all">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-900">Q{i+1}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${q.type === '객관식' ? 'bg-blue-50 text-blue-600' : q.type === '단답형' ? 'bg-amber-50 text-amber-600' : 'bg-purple-50 text-purple-600'}`}>
                          {q.type}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">난이도: {q.difficulty}</span>
                    </div>

                    <h5 className="text-lg font-bold text-slate-800 leading-relaxed mb-6">{q.text}</h5>
                    
                    {q.options && (
                      <div className="space-y-2">
                        {q.options.map((opt, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 rounded-xl border border-slate-50 hover:bg-slate-50 cursor-pointer text-sm font-medium text-slate-600 group-hover:border-slate-100">
                             <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center text-[10px]">{idx + 1}</div>
                             {opt}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-xs font-bold text-slate-400 hover:text-brand-primary flex items-center gap-1">
                         <Link size={14} /> 원문 보기
                      </button>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                         <CheckCircle2 size={14} /> 답안 확인은 해설 페이지에서
                      </div>
                    </div>
                  </div>
                ))}

                <button className="w-full py-4 bg-white border border-brand-primary text-brand-primary rounded-2xl font-bold text-sm hover:bg-sky-50 transition-all flex items-center justify-center gap-2">
                   문제 추가 생성하기
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
