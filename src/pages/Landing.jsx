import { ShieldCheck, Upload, Brain, ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 bg-white border-b border-slate-200">
        <h1 className="text-3xl font-bold text-blue-600">DevGuard AI</h1>

        <div className="flex gap-8 text-slate-600 font-medium">
          <a href="#">Dashboard</a>
          <a href="#">About</a>
          <a href="#">Login</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-10 lg:px-20 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <p className="text-blue-600 font-semibold mb-3">
            Microsoft DevOps Pipeline Agent
          </p>

          <h1 className="text-6xl font-bold leading-tight text-slate-900">
            Predict Production Failures Before They Happen
          </h1>

          <p className="text-slate-600 text-lg mt-6">
            DevGuard AI remembers previous deployments, detects risky releases,
            and recommends rollback strategies using Hindsight memory.
          </p>

          <button className="mt-8 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl text-lg font-semibold">
            Get Started
            <ArrowRight size={20}/>
          </button>
        </div>

        {/* Right Card */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Deployment Analysis</h2>
            <ShieldCheck className="text-green-500"/>
          </div>

          <div className="bg-red-50 rounded-2xl p-6 mt-6">
            <p className="text-red-600 font-medium">Risk Score</p>

            <h1 className="text-6xl font-bold text-red-600 mt-2">
              91%
            </h1>

            <p className="text-red-500 mt-2">
              Critical Deployment
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">

            <div className="bg-slate-100 rounded-xl p-4">
              <p className="text-sm text-slate-500">Incidents</p>
              <h3 className="text-2xl font-bold">148</h3>
            </div>

            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-600">Rollback</p>
              <h3 className="text-2xl font-bold text-green-600">
                Ready
              </h3>
            </div>

          </div>
        </div>

      </section>

      {/* Feature Cards */}
      <section className="px-10 lg:px-20 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why DevGuard AI?
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <Upload className="text-blue-600 mb-4" size={32}/>
            <h3 className="font-bold text-xl">Upload Logs</h3>
            <p className="text-slate-600 mt-3">
              Drag & drop deployment logs from GitHub Actions, Azure DevOps, or Jenkins.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <Brain className="text-purple-600 mb-4" size={32}/>
            <h3 className="font-bold text-xl">Memory Recall</h3>
            <p className="text-slate-600 mt-3">
              Hindsight remembers similar failures and retrieves previous fixes automatically.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <ShieldCheck className="text-green-600 mb-4" size={32}/>
            <h3 className="font-bold text-xl">Prevent Outages</h3>
            <p className="text-slate-600 mt-3">
              Receive risk scores, root-cause analysis, and rollback recommendations instantly.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}