import { ArrowLeft, Wand2 } from "lucide-react"

export default function CustomEventRulesWizard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/alerts-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Alerts Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-9 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-4">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-xl shadow-sm">
            <Wand2 className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            Custom Event Rules Wizard: A Step-by-Step Guide
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Use the intuitive wizard interface to create custom event rules with ease — no technical expertise required.
          </p>
        </section>

        {/* Wizard Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Overview</h2>
              <p className="text-slate-700 leading-relaxed">
                The Custom Event Rules Wizard guides you through creating rules with a visual step-by-step interface.
                It simplifies complex logic into intuitive options for speed, location, time, and driver behavior.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Wizard Benefits</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li><strong>Guided Process:</strong> Step-by-step interface</li>
                <li><strong>Validation:</strong> Real-time checks & suggestions</li>
                <li><strong>Preview:</strong> Test rule behavior before saving</li>
                <li><strong>Templates:</strong> For speeding, zones, idle time & more</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Wizard Steps</h2>

              {/* Step Sections */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-1">Step 1: Rule Info</h3>
                  <p className="text-slate-700">Name and describe the rule clearly for future use.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Step 2: Define Triggers</h3>
                  <p className="text-slate-700">Choose what causes the rule to activate (speed, geofence, time, etc).</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Step 3: Add Filters</h3>
                  <p className="text-slate-700">Specify vehicles, drivers, time ranges, or geofences to narrow scope.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Step 4: Actions & Notifications</h3>
                  <p className="text-slate-700">Select who gets notified and how (email, dashboard, mobile push).</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-1">Step 5: Review & Activate</h3>
                  <p className="text-slate-700">Preview your rule, run tests if needed, then deploy.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-700 mb-2">Popular Templates</h2>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li><strong>Speed Monitoring:</strong> Track violations above thresholds</li>
                <li><strong>Geofence Alerts:</strong> Trigger on entry/exit to zones</li>
                <li><strong>Idle Detection:</strong> Alert when vehicle idles too long</li>
                <li><strong>After Hours Usage:</strong> Notify on vehicle use outside business times</li>
              </ul>
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
          <a href="https://gettysecure.com" className="text-blue-400 hover:text-blue-300 transition">
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
