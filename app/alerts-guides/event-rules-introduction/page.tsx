import { ArrowLeft, Bell } from "lucide-react"

export default function EventRulesIntroduction() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="/alerts-guides" className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Alerts Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Title */}
        <section className="text-center mb-16">
          <div className="mx-auto w-20 h-20 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm mb-6">
            <Bell className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Event Rules Introduction</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Learn the fundamentals of creating and managing event rules to automate your fleet monitoring and response systems.
          </p>
        </section>

        {/* Content */}
        <section className="bg-white shadow-md rounded-2xl p-10 space-y-12 text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">What are Event Rules?</h2>
            <p>
              Event rules are automated conditions that trigger alerts or actions when certain vehicle behaviors or statuses occur—making proactive fleet management possible.
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-1">
              <li><strong>Proactive Monitoring:</strong> Catch issues early</li>
              <li><strong>Improved Safety:</strong> Alerts for harsh driving or emergencies</li>
              <li><strong>Efficiency:</strong> Eliminate manual checks</li>
              <li><strong>Cost Saving:</strong> Reduce fuel use and wear</li>
              <li><strong>Compliance:</strong> Meet internal policies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Types of Event Rules</h2>
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-semibold">Movement-Based</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Speeding</li>
                  <li>Harsh Acceleration or Braking</li>
                  <li>Idle Time</li>
                  <li>Route Deviation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Location-Based</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Geofence Entry/Exit</li>
                  <li>Restricted Area Access</li>
                  <li>Landmark Proximity</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Time-Based</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>After-Hours Usage</li>
                  <li>Maintenance Reminders</li>
                  <li>Driver Hours Compliance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Emergency</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Panic Button Alerts</li>
                  <li>Vehicle Theft Detection</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Event Rule Components</h2>
            <h3 className="text-xl font-semibold">Triggers</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Speed thresholds</li>
              <li>Geofences</li>
              <li>Time periods</li>
              <li>Status changes</li>
              <li>Driver behavior</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Conditions</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Duration met</li>
              <li>Vehicle filters</li>
              <li>Driver filters</li>
              <li>Date/time filters</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6">Actions</h3>
            <ul className="list-disc pl-6 mt-2">
              <li>Email or push notifications</li>
              <li>Dashboard alerts</li>
              <li>Auto reports</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Event Rule Lifecycle</h2>
            <div className="grid gap-6">
              <div>
                <h3 className="text-xl font-semibold">1. Planning</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Define needs</li>
                  <li>Set priorities</li>
                  <li>Determine recipients</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">2. Configuration</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Create triggers/conditions</li>
                  <li>Assign to vehicles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">3. Deployment</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Start small (pilot)</li>
                  <li>Monitor and adjust</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold">4. Maintenance</h3>
                <ul className="list-disc pl-6 mt-2">
                  <li>Review performance</li>
                  <li>Update thresholds</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Start Simple:</strong> Avoid complex logic at first</li>
              <li><strong>Test Often:</strong> Avoid false positives</li>
              <li><strong>Send to Right People:</strong> Avoid noise</li>
              <li><strong>Review & Tune:</strong> Rules evolve over time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Next Steps</h2>
            <p>Now that you understand the basics of event rules, you can:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Use the Custom Event Rules Wizard</li>
              <li>Explore Event Panel real-time tools</li>
              <li>Read specific alert configuration guides</li>
            </ul>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center text-sm space-y-1">
          <p>© 2024 Getty Tech. All rights reserved.</p>
          <p>Comprehensive GPS tracking solutions for new business needs</p>
          <p>Address: Italian Village 1 House No 283</p>
          <a href="https://gettysecure.com" className="text-blue-400 hover:text-blue-300">
            https://gettysecure.com
          </a>
        </div>
      </footer>
    </div>
  )
}
