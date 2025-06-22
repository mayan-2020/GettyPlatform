import { ArrowLeft, Download } from "lucide-react"

export default function ExportImportGeofences() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 to-white text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/geofencing-guides"
            className="flex items-center gap-2 text-white hover:text-blue-400 transition"
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
          <div className="mx-auto w-20 h-20 flex items-center justify-center bg-blue-100 text-blue-600 rounded-2xl shadow-md">
            <Download className="w-10 h-10" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">Export & Import Geofences</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Easily transfer geofences between platforms, create backups, or share configurations with your team.
          </p>
        </section>

        {/* Guide Section */}
        <section className="bg-white/90 border border-slate-200 rounded-3xl shadow-lg p-10 space-y-16">

          {/* Exporting */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Exporting Geofences</h2>
            <p>Export your geofences for backup, migration, or sharing purposes.</p>

            <div>
              <h3 className="text-lg font-semibold">Export Options</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li><strong>All Geofences:</strong> Export the full set</li>
                <li><strong>Selected Geofences:</strong> Choose specific items to export</li>
                <li><strong>By Category:</strong> Filter by type or group</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Export Formats</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li><strong>KML:</strong> Use for polygonal boundaries and map compatibility</li>
                <li><strong>CSV:</strong> Easy spreadsheet format for simple geofences</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">How to Export</h3>
              <ol className="list-decimal list-inside text-slate-700 space-y-2">
                <li>Go to Geofence Management</li>
                <li>Click <strong>Export Geofences</strong></li>
                <li>Select items manually or use filters</li>
                <li>Choose export format (KML/CSV)</li>
                <li>Click <strong>Export</strong> and download the file</li>
              </ol>
            </div>
          </div>

          {/* Importing */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-700">Importing Geofences</h2>
            <p>Import saved geofences to restore, share, or migrate configurations.</p>

            <div>
              <h3 className="text-lg font-semibold">Before You Import</h3>
              <ul className="list-disc list-inside text-slate-700 space-y-1">
                <li>Ensure file is in supported format (CSV or KML)</li>
                <li>Check for duplicate names</li>
                <li>Back up your current geofences if needed</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold">How to Import</h3>
              <ol className="list-decimal list-inside text-slate-700 space-y-2">
                <li>Open the Geofence Management section</li>
                <li>Click <strong>Import Geofences</strong></li>
                <li>Choose the KML or CSV file</li>
                <li>Decide how to handle duplicates:
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Skip duplicates</li>
                    <li>Automatically rename</li>
                    <li>Overwrite existing entries</li>
                  </ul>
                </li>
                <li>Preview and validate entries</li>
                <li>Click <strong>Import</strong></li>
                <li>Check the results for errors</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-6 mt-24">
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
