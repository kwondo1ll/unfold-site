import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ChevronRight, FileUp, Sparkles, BookCheck, Image as ImageIcon, GraduationCap, ArrowRight } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "생략 없는 상세 설명",
      desc: "요약 위주가 아니라, 원문의 모든 개념을 빠짐없이 구조적으로 설명해드립니다.",
      icon: Sparkles,
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      title: "수준별 학습 모드",
      desc: "입문자부터 시험 대비까지, 사용자의 수준에 맞춘 맞춤형 설명 방식을 제공합니다.",
      icon: GraduationCap,
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      title: "시험 예상문제 생성",
      desc: "학습한 자료를 바탕으로 객관식, 단답형, 서술형 예상문제를 자동으로 만들어줍니다.",
      icon: BookCheck,
      color: "text-emerald-500",
      bg: "bg-emerald-50"
    },
    {
      title: "드래그 영역 시각화",
      desc: "이해가 안 가는 영역을 드래그하면 직관적인 이미지 카드로 변환해줍니다.",
      icon: ImageIcon,
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="bg-brand-gray">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                <span>대학생 전용 AI 학습 파트너</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                파일만 넣으면,<br />
                <span className="text-brand-primary">이해가 펼쳐진다</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                요약이 아니라, 생략 없는 설명으로 공부를 완성하세요.<br />
                강의자료 PDF부터 캡처한 판서 이미지까지 AI가 당신의 수준에 맞춰 자세히 설명해드립니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/workspace"
                  className="px-8 py-4 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-sky-400 shadow-xl shadow-sky-200/50 transition-all flex items-center justify-center gap-2"
                >
                  파일 업로드 시작하기 <ArrowRight size={20} />
                </Link>
                <button className="px-8 py-4 bg-white text-slate-700 rounded-2xl font-bold text-lg border border-slate-200 hover:bg-slate-50 transition-all">
                  기능 둘러보기
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium overflow-auto scrollbar-hide">
                <span className="shrink-0">#PDF 업로드</span>
                <span className="shrink-0">#이미지 설명</span>
                <span className="shrink-0">#수준별 학습</span>
                <span className="shrink-0">#예상문제 생성</span>
                <span className="shrink-0">#시각화</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-white relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center">
                      <FileUp className="text-brand-primary capitalize" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">학습 자료 업로드</h4>
                      <p className="text-xs text-slate-500 font-medium">PDF, JPG, PNG 지원 가능</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full">New Workspace</span>
                </div>

                <div className="border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center mb-8 bg-slate-50/50 hover:bg-brand-gray transition-colors group cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-full shadow-sm mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FileUp className="text-slate-400 group-hover:text-brand-primary" />
                  </div>
                  <p className="font-bold text-slate-800">이곳에 파일을 드래그하세요</p>
                  <p className="text-sm text-slate-500 mt-1">또는 내 컴퓨터에서 탐색</p>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-900 mb-2">학습 모드 선택</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["입문", "중급", "고급", "시험대비"].map((mode, i) => (
                      <div key={mode} className={`p-3 rounded-xl border text-sm font-bold text-center transition-all ${i === 3 ? "border-brand-primary bg-sky-50 text-brand-primary shadow-sm" : "border-slate-100 text-slate-600"}`}>
                        {mode} 모드
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-900 rounded-2xl">
                  <div className="flex items-center gap-2 mb-2 text-sky-400">
                    <Sparkles size={14} />
                    <span className="text-[10px] font-bold tracking-widest uppercase">Analysis Progress</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                      className="h-full bg-brand-primary" 
                    />
                  </div>
                  <p className="text-sky-100/60 text-[10px] mt-2 font-medium">자료에서 핵심 개념 8개를 발견했습니다...</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-64 glass rounded-2xl p-5 shadow-xl border border-white/40 hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-emerald-50">
                    <BookCheck size={16} className="text-white" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-none">시험 예상문제 생성 완료</div>
                </div>
                <div className="text-[10px] text-slate-500 leading-relaxed">
                  업로드하신 "심리학 개론 4주차.pdf"를 바탕으로 10개의 예상문제가 생성되었습니다.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">똑똑한 대학생의 학습 파트너</h2>
            <p className="text-slate-600">단순한 요약을 넘어, 당신의 성장과 성적을 모두 챙겨주는 올인원 학습 도구입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-brand-gray border border-slate-100 card-hover"
              >
                <div className={`w-12 h-12 ${f.bg} rounded-2xl flex items-center justify-center mb-6`}>
                  <f.icon className={f.color} size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                <Link to="/workspace" className="text-xs font-bold text-brand-primary flex items-center gap-1 hover:gap-2 transition-all">
                  자세히 보기 <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">펼쳐지는 학습의 흐름</h2>
              <div className="space-y-12">
                {[
                  { step: "01", title: "파일 업로드", desc: "강의자료, 전공책 PDF, 캡처 이미지까지 그대로 업로드하세요." },
                  { step: "02", title: "설명 모드 선택", desc: "입문부터 시험대비까지 당신에게 필요한 방식을 선택하세요." },
                  { step: "03", title: "상세 설명 확인", desc: "AI가 생략 없이 구조적으로 친절하게 설명해드립니다." },
                  { step: "04", title: "학습 마무리", desc: "예상문제와 시각화 자료로 시험 공부를 완벽하게 끝내세요." },
                ].map((s) => (
                  <div key={s.step} className="flex gap-6 group">
                    <div className="shrink-0 text-3xl font-bold text-slate-700 transition-colors group-hover:text-brand-primary">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                      <p className="text-slate-400 text-sm">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-800 rounded-full p-12 border border-slate-700 relative overflow-hidden flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold mb-4 bg-gradient-to-br from-white to-slate-500 bg-clip-text text-transparent">UnFold</div>
                  <p className="text-slate-400 max-w-xs mx-auto">여러분의 학습 자료를 한 눈에 들어오는 지식으로 펼쳐드립니다.</p>
                </div>
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-4 border-dashed border-slate-700/50 rounded-full" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div 
            whileInView={{ scale: 0.98 }}
            className="bg-brand-primary rounded-[3rem] p-16 text-center text-white shadow-2xl shadow-sky-200"
          >
            <h2 className="text-4xl font-bold mb-6">강의자료를 그냥 쌓아두지 마세요</h2>
            <p className="text-xl text-sky-50 opacity-90 mb-10">이해가 펼쳐지는 순간, 성적은 자연스럽게 따라옵니다.</p>
            <div className="flex justify-center gap-4">
               <Link
                  to="/workspace"
                  className="px-10 py-5 bg-white text-brand-primary rounded-2xl font-bold text-xl hover:bg-slate-50 transition-all flex items-center gap-2 shadow-lg"
                >
                  지금 무료로 시작하기 <ArrowRight />
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
