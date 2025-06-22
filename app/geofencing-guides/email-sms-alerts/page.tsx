import { ArrowLeft, MapPin } from "lucide-react"

export default function CreateAndManageGeofences() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-50 text-slate-800 font-sans">
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
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl shadow-lg animate-pulse">
            <MapPin className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Create & Manage Geofences</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Learn how to create virtual boundaries and efficiently manage them in your fleet tracking platform.
          </p>
        </section>

        {/* Steps & Content */}
        <section className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl shadow-xl p-12 space-y-12">
          {/* Creating Geofences */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Creating a New Geofence</h2>
            <p className="leading-relaxed text-slate-700">
              Geofences are virtual zones on the map that trigger actions when vehicles enter or exit.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Access the Geofence Window</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Open the main menu and select <strong>"Geofences"</strong>.</li>
                <li>Click <strong>"Create New Geofence"</strong>.</li>
                <li>Choose the shape: <em>circle</em>, <em>polygon</em>, or <em>route-based</em>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Define the Area</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Use the map to select your target area.</li>
                <li>For circles, click the center and drag to set the radius.</li>
                <li>For polygons, click multiple points to form the shape.</li>
                <li>Adjust any boundary point if needed.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Configure Settings</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Name:</strong> Give it a clear and specific name.</li>
                <li><strong>Description:</strong> (Optional) Add context like its purpose or hours.</li>
              </ul>
            </div>
          </div>

          {/* Managing Geofences */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Managing Existing Geofences</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">Editing</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Open the geofence list from your dashboard.</li>
                <li>Click the geofence you'd like to modify.</li>
                <li>Adjust settings or reshape it.</li>
                <li>Click <strong>Save</strong>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Deleting</h3>
              <p className="text-slate-700 leading-relaxed">
                To permanently delete a geofence, select it and click the delete icon. ⚠️ This cannot be undone.
              </p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Name geofences clearly by location or purpose.</li>
              <li>Review zones monthly for accuracy and performance.</li>
              <li>Test zones with 1–2 vehicles before fleet-wide use.</li>
              <li>Avoid overly small zones to prevent false alerts.</li>
            </ul>
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
