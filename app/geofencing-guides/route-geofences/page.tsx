import { ArrowLeft, Route } from "lucide-react"

export default function RouteGeofences() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/geofencing-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Geofencing Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-9 w-auto" />
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-20 space-y-16">
        {/* Page Header */}
        <section className="text-center space-y-5">
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl shadow-md animate-pulse">
            <Route className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">How to Use Route Geofences</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Create geofences along specific routes to ensure vehicles stay on track and improve route compliance.
          </p>
        </section>

        {/* Steps & Content */}
        <section className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl shadow-xl p-12 space-y-12">
          {/* Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Understanding Route Geofences</h2>
            <p className="text-slate-700 leading-relaxed">
              Route geofences are virtual corridors along a planned path. They help monitor if vehicles follow assigned routes by defining a buffer zone and alerting on deviations.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-700">Benefits</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-1">
              <li>Ensure drivers follow designated routes</li>
              <li>Monitor compliance and detect detours</li>
              <li>Optimize delivery and logistics planning</li>
              <li>Enhance safety by enforcing route policies</li>
              <li>Reduce fuel and time wastage from deviations</li>
            </ul>
          </div>

          {/* Creating Routes */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Creating Route Geofences</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Plan Your Route</h3>
              <ol className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Open the Route Geofence creation tool</li>
                <li>Enter a starting address or coordinates</li>
                <li>Add intermediate waypoints along the route</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Set Route Parameters</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Buffer Width:</strong> Set the zone width (e.g., 50–200 meters)</li>
                <li><strong>Route Name:</strong> Provide a meaningful name</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Configure Route Settings</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Active Times:</strong> Choose when the route is enforced</li>
                <li><strong>Vehicle Assignment:</strong> Select vehicles for this route</li>
                <li><strong>Tolerance Settings:</strong> Define how much deviation is allowed</li>
                <li><strong>Alert Preferences:</strong> Set up notifications for violations</li>
              </ul>
            </div>
          </div>

          {/* Monitoring Alerts */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Route Monitoring and Alerts</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">Deviation Types</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li><strong>Minor Deviation:</strong> Temporary or slight off-path movement</li>
                <li><strong>Major Deviation:</strong> Prolonged or significant off-route activity</li>
                <li><strong>Route Abandonment:</strong> Vehicle leaves the route entirely</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6 mt-24 border-t border-slate-800">
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
