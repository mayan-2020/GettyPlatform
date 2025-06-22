import { ArrowLeft, MapPin } from "lucide-react"

export default function CreateAndManageGeofences() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/geofencing-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium tracking-wide">Back to Geofencing Guides</span>
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
            <MapPin className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Create & Manage Geofences</h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Learn how to create virtual boundaries and efficiently manage them in your fleet tracking platform.
          </p>
        </section>

        {/* Steps & Content */}
        <section className="bg-white rounded-2xl shadow-md p-10 space-y-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Creating a New Geofence</h2>
            <p className="leading-relaxed">
              Geofences are virtual zones you can draw on the map. Once a vehicle enters or exits them, your system can trigger alerts, reports, or actions.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 1: Access the Geofence Window</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Go to the main menu and choose <strong>"Geofences"</strong>.</li>
                <li>Click on <strong>"Create New Geofence"</strong>.</li>
                <li>Select a geofence type: <em>circle</em>, <em>polygon</em>, or <em>route-based</em>.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 2: Define the Area</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Use the interactive map to pinpoint your location.</li>
                <li>Circle: Click a center point and drag to set radius.</li>
                <li>Polygon: Click multiple points to draw a custom shape.</li>
                <li>Adjust by dragging any control point on the map.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Step 3: Geofence Settings</h3>
              <ul className="space-y-2 text-slate-700">
                <li><strong>Name:</strong> Assign a clear, descriptive title.</li>
                <li><strong>Description:</strong> (Optional) Add details like purpose or schedule.</li>
              </ul>
            </div>
          </div>

          {/* Managing Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Managing Existing Geofences</h2>

            <div>
              <h3 className="text-xl font-semibold mb-2">Editing</h3>
              <ul className="list-decimal list-inside space-y-1 text-slate-700">
                <li>Open the Geofence list from the sidebar.</li>
                <li>Select the geofence to modify.</li>
                <li>Edit boundaries, name, or other properties.</li>
                <li>Click "Save" when you're done.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Deleting</h3>
              <p className="text-slate-700 leading-relaxed">
                To delete a geofence, open it from the list and click the delete button. ⚠️ This action is permanent, so ensure it’s no longer needed.
              </p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">Best Practices</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              <li>Use meaningful names for easier management.</li>
              <li>Review and update geofences regularly.</li>
              <li>Test new geofences with one vehicle first.</li>
              <li>Don't make zones too small — false alerts may occur.</li>
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
