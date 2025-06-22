import { ArrowLeft, Gauge } from "lucide-react"

export default function CatchSpeedingAssets() {
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
            <Gauge className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Event Rule: Catch Speeding Assets</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Set up comprehensive speed monitoring alerts to catch vehicles exceeding speed limits and improve fleet
            safety.
          </p>
        </section>

        {/* Guide Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Overview</h2>
            <p>
              Speed monitoring is one of the most critical safety features in fleet management. This guide will help you
              set up effective speeding alerts that balance safety enforcement with practical operational needs.
            </p>

            <h3 className="text-xl font-semibold text-slate-800">Why Speed Monitoring Matters</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li><strong>Safety:</strong> Reduce accident risk and protect drivers</li>
              <li><strong>Legal Compliance:</strong> Avoid traffic violations and fines</li>
              <li><strong>Insurance Benefits:</strong> Lower premiums through safer driving</li>
              <li><strong>Fuel Efficiency:</strong> Reduce fuel consumption</li>
              <li><strong>Vehicle Maintenance:</strong> Reduce wear and tear</li>
              <li><strong>Company Reputation:</strong> Maintain professional image</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Types of Speed Monitoring</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">1. Posted Speed Limit Monitoring</h3>
              <p className="text-slate-700">Automatically detects when vehicles exceed posted speed limits using GPS and speed limit databases.</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Advantages:</strong> Accurate, legally relevant, comprehensive coverage</li>
                <li><strong>Best for:</strong> General fleet monitoring, compliance reporting</li>
                <li><strong>Considerations:</strong> Requires updated speed limit database</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">2. Custom Speed Threshold Monitoring</h3>
              <p className="text-slate-700">Set your own speed limits regardless of posted limits.</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Advantages:</strong> Company-specific policies, consistent across all areas</li>
                <li><strong>Best for:</strong> Conservative safety policies, specific vehicle types</li>
                <li><strong>Considerations:</strong> May be more restrictive than legal limits</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">3. Zone-Based Speed Monitoring</h3>
              <p className="text-slate-700">Different speed limits for different areas or geofences.</p>
              <ul className="list-disc list-inside text-slate-700 mt-2 space-y-1">
                <li><strong>Advantages:</strong> Context-aware, flexible policies</li>
                <li><strong>Best for:</strong> Mixed urban/highway operations, customer sites</li>
                <li><strong>Considerations:</strong> Requires geofence setup and maintenance</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Setting Up Speed Monitoring Rules</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Choose Your Monitoring Type</h3>
              <ul className="list-decimal list-inside text-slate-700 space-y-1">
                <li>Go to Event Rules → Create New Rule</li>
                <li>Select “Speed Limit Violation” or custom rule type</li>
                <li>Choose between Posted, Custom, or Zone-based monitoring</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Configure Speed Parameters</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li><strong>Speed Threshold:</strong> Choose your limit (e.g., 60 mph or 5 mph above posted)</li>
                <li><strong>Duration:</strong> Set how long speeding must occur to trigger an alert (e.g., 20 seconds)</li>
                <li><strong>Tolerance:</strong> Allow for slight speed fluctuations to reduce false positives</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Filter by Vehicle or Driver</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Apply rule to specific vehicles or groups</li>
                <li>Assign different rules to new or high-risk drivers</li>
                <li>Exclude emergency vehicles or special use cases</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Start with conservative limits and tighten as needed</li>
              <li>Educate drivers on how alerts work and why</li>
              <li>Use graduated alerts for different speeding levels</li>
              <li>Regularly review reports to spot trends and improve behavior</li>
              <li>Balance alert frequency to avoid notification fatigue</li>
            </ul>
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
