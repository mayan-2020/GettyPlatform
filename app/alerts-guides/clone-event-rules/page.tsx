import { ArrowLeft, Copy, Settings } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function CloneEventRulesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Platform</span>
          </a>
          <img
            src="/images/getty-logo.png"
            alt="Getty Tech Logo"
            className="h-9 w-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl shadow-sm">
            <Copy className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">How to Clone Event Rules</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Save time by duplicating existing event rules instead of starting from scratch. Use this guide to quickly reuse and modify your configurations.
          </p>
        </section>

        {/* Guide Section */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700 flex items-center gap-2">
              <Settings className="h-6 w-6 text-blue-600" />
              Cloning Steps
            </h2>

            {[
              "Log in to your application",
              "Go to Main Menu > Admin > Event Rules",
              "Right-click on the rule you want to duplicate.",
              "Select the option Clone",
              "Now make the relevant changes to your new rule.",
              "Save your new rule."
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg">
                <Badge
                  variant="outline"
                  className="w-8 h-8 rounded-full p-0 flex items-center justify-center bg-blue-100 text-blue-700 border-blue-300"
                >
                  {index + 1}
                </Badge>
                <span className="text-slate-700 text-base">{step}</span>
              </div>
            ))}

            {/* Image Example */}
            <div className="my-8">
              <div className="border rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/clone-event-rule.png"
                  alt="Event rules list with clone option highlighted"
                  width={800}
                  height={500}
                  className="w-full"
                />
              </div>
            </div>

            {/* Extra Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-800 mb-2 text-lg">
                When else might you want to clone an event rule?
              </h4>
              <p className="text-blue-700 text-base">
                You might use separate event rules to differentiate notifications, reporting behavior, or apply variations across vehicle groups.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center space-y-1 text-sm">
          <p>© 2024 Getty Tech. All rights reserved.</p>
          <p>Comprehensive GPS tracking solutions for evolving business needs</p>
          <p>Address: Italian Village 1, House No. 283</p>
          <a
            href="https://gettysecure.com"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
