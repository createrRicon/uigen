import { Metadata } from "next";

export const metadata: Metadata = {
  title: "轻流 AI - 作品集",
  description: "轻流 AI 功能设计展示",
};

export default function QingliuAIPage() {
  return (
    <main className="min-h-screen bg-[#121315]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl font-semibold text-white tracking-tight">
            轻流 AI
          </h1>
          <p className="mt-4 text-xl text-neutral-400">
            全局智能体功能设计
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - 需求背景 */}
          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <span className="text-2xl">💡</span>
              </div>
              <h2 className="text-4xl font-semibold text-white">需求背景</h2>
            </div>

            <div className="space-y-6">
              {/* 市场压力 */}
              <div className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-6 text-center">
                <p className="mb-2 text-2xl font-semibold text-white">市场压力</p>
                <p className="text-lg text-neutral-400">
                  AI 功能已成为 SaaS 产品的重要竞争力
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* 用户痛点 */}
              <div className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-6 text-center">
                <p className="mb-2 text-2xl font-semibold text-white">用户痛点</p>
                <p className="text-lg text-neutral-400">
                  轻流功能日益增多学习曲线陡峭
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* 轻流 AI */}
              <div className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-6 text-center">
                <p className="mb-3 text-2xl font-semibold text-white">轻流 AI</p>
                <div className="text-lg text-neutral-400">
                  <p>Q4 启动「轻流AI」项目，</p>
                  <p>项目内容包括「AI字段」</p>
                  <p>
                    「AI节点」和<span className="text-white font-medium">「全局智能体」</span>
                  </p>
                  <p className="mt-2 text-sm">计划2025年年末进行线上发布会</p>
                </div>
              </div>
            </div>
          </section>

          {/* Right Column - 设计挑战 */}
          <section>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <span className="text-2xl">🎯</span>
              </div>
              <h2 className="text-4xl font-semibold text-white">设计挑战</h2>
            </div>

            <div className="space-y-6">
              {/* 全局智能体介绍 */}
              <div className="text-center">
                <p className="mb-2 text-2xl font-semibold text-white">全局智能体</p>
                <p className="text-lg text-neutral-400">
                  在轻流主站的通用 Agent，帮助用户完成各种任务
                </p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <svg
                  className="h-8 w-8 text-neutral-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>

              {/* Three Challenges */}
              <div className="space-y-4">
                {/* Challenge 1 */}
                <div className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-6 text-center">
                  <p className="mb-2 text-xl font-semibold text-white/70">
                    来得及设计吗？
                  </p>
                  <p className="text-base text-neutral-400">
                    时间紧急，需要快速交付设计
                  </p>
                </div>

                {/* Challenge 2 - Highlighted */}
                <div className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-6 text-center shadow-lg shadow-white/5">
                  <p className="mb-2 text-xl font-semibold text-white">
                    用户能信任 AI 吗？
                  </p>
                  <p className="text-base text-neutral-300">
                    B 端业务需要精准和可控，获取用户信任非常重要
                  </p>
                </div>

                {/* Challenge 3 */}
                <div className="rounded-full border-2 border-white/20 bg-white/5 px-8 py-6 text-center">
                  <p className="mb-2 text-xl font-semibold text-white/70">
                    用户愿意学吗？
                  </p>
                  <p className="text-base text-neutral-400">
                    Agent 可能会颠覆用户的操作习惯
                  </p>
                </div>
              </div>

              {/* Summary */}
              <div className="rounded-xl bg-white/5 px-6 py-4">
                <p className="text-center text-lg text-neutral-300 leading-relaxed">
                  我把这三个问题定义为核心挑战，它们分别对应
                  <span className="text-white font-medium">效率、信任、习惯</span>
                  三个维度——任何一个没解决，用户就用不起来
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-neutral-500">
            2025 · 轻流 AI 项目作品集
          </p>
        </div>
      </div>
    </main>
  );
}
