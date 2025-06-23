import { ArrowLeft, Activity } from "lucide-react"

export default function EventPanelFeatures() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/alerts-guides"
            className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Alerts Guides</span>
          </a>
          <img src="/images/getty-logo.png" alt="Getty Tech Logo" className="h-8 w-auto" />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Title Section */}
        <section className="text-center mb-16">
          <div className="mx-auto w-20 h-20 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shadow-sm mb-6">
            <Activity className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-800">Event Panel Features & Management</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            The event panel design helps customers manage events quickly and accurately. Features are tailored for operators and fleet managers.
          </p>
        </section>

        {/* Content Section */}
        <section className="bg-white shadow-md rounded-2xl p-10 space-y-12 text-slate-700">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Real-Time Overview</h2>
            <p>See ongoing events instantly with card or list views.</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Card View:</strong> Quick glance at open/new events with red indicators.</li>
              <li><strong>List View:</strong> Sorted list of all real-time events.</li>
              <li><strong>Color Coding:</strong> Black for open, red for new.</li>
            </ul>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <img src="/images/event-panel-card-view.png" alt="Card View" className="rounded-lg shadow" />
              <img  src="/images/event-panel-list-view.png" alt="List View" className="rounded-lg shadow" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Map-Based Tracking</h2>
            <p>Get visual confirmation by seeing event counts on asset markers.</p>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <img src="/images/event-panel-overview.png" alt="Panel Overview" className="rounded-lg shadow" />
              <img src="/images/event-location-map.png" alt="Location Map" className="rounded-lg shadow" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Asset List Integration</h2>
            <p>Sort or filter open events directly from the Asset List view.</p>
            <img
              src="/images/asset-list-open-events.png"
              alt="Open Events Column"
              className="rounded-lg shadow mt-4"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Drill-Down & Filters</h2>
            <p>Click icons or apply filters by event type or time.</p>
            <div className="grid grid-cols-1 gap-6 mt-6">
              <img src="/images/event-card-drill-down.png" alt="Card Drill Down" className="rounded-lg shadow" />
              <img src="/images/event-drill-down-details.png" alt="Drill Down Details" className="rounded-lg shadow" />
              <img src="/images/event-panel-filtered-list.png" alt="Filtered View" className="rounded-lg shadow" />
              <img src="/images/map-context-menu.png" alt="Map Context Menu" className="rounded-lg shadow" />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Prioritized Notifications</h2>
            <p>
              Set pop-up alerts for high-priority events like speeding or SOS.
              Configure via the event panel menu.
            </p>
            <img
              src="/images/event-notification-popup.png"
              alt="Popup Notification"
              className="rounded-lg shadow mt-4"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Detailed Event Records</h2>
            <p>
              Each event log includes time, location, asset, and any operator notes for accountability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Deprecated Features</h2>
            <p>Timeline and Event Icons are replaced with Area Search.</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Final Tips</h2>
            <p>Always save your workspace to retain column settings and views.</p>
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
